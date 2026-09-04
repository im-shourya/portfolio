import { ReactNode } from 'react';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content?: ReactNode;
};

export const posts: BlogPost[] = [
  {
    slug: 'building-a-voice-rag-system-under-a-200ms-latency-budget',
    title: 'Building a Voice RAG System Under a 200ms Latency Budget',
    excerpt: 'Voice → Retrieval → Grounded Answer — with a hard 200ms budget. How I built a fast, robust RAG pipeline for the HH Goa 2026 task.',
    date: 'Sept 5, 2026',
    readTime: '10 min read',
    tags: ['AI', 'RAG', 'Python', 'FastAPI'],
    featured: true,
    content: (
      <>
        <p>
          For <a href="https://github.com/im-shourya/HHGOA-TASK2" target="_blank" rel="noopener noreferrer">HH Goa 2026</a>, I worked on Task 2: building a Retrieval-Augmented Generation system over the AI4Bharat MSMARCO-XI dataset.
        </p>
        <p>
          At first glance, it sounded like a standard RAG problem:<br />
          Take a question → retrieve relevant documents → generate an answer.
        </p>
        <p>
          But the actual engineering challenge was much more interesting. The system needed to handle:
        </p>
        <ul>
          <li>Voice input</li>
          <li>Speech-to-text</li>
          <li>Large-scale chunking</li>
          <li>Multilingual retrieval</li>
          <li>Dense + sparse search</li>
          <li>Query classification</li>
          <li>Hallucination prevention</li>
          <li>Prompt-injection protection</li>
          <li>Grounding verification</li>
          <li>Failure handling</li>
        </ul>
        <p>
          And, most importantly, a <strong>200ms core latency budget</strong>. That last requirement changed almost every architectural decision.
        </p>
        <p>
          The result was a voice-enabled RAG pipeline that achieved:
        </p>
        <ul>
          <li><strong>P50:</strong> 7.87ms</li>
          <li><strong>P70:</strong> 9.62ms</li>
          <li><strong>P100:</strong> 40.71ms</li>
          <li><strong>100%</strong> of 927 benchmark runs within 200ms</li>
          <li><strong>241</strong> automated tests</li>
          <li>Hybrid dense + BM25+ retrieval</li>
          <li>Five chunking strategies</li>
          <li>Multi-layer safety and grounding checks</li>
        </ul>
        <p>
          Repository: <a href="https://github.com/im-shourya/HHGOA-TASK2" target="_blank" rel="noopener noreferrer">github.com/im-shourya/HHGOA-TASK2</a>
        </p>

        <h2>1. The Problem</h2>
        <p>
          The system was built around the ai4bharat/MSMARCO-XI dataset. The goal was to create a system where a user could essentially:
          <br /><strong>Speak → Retrieve → Understand → Answer</strong>
        </p>
        <p>
          The initial architecture looked straightforward:
          <br />
          <code>Voice Input ↓ Speech-to-Text ↓ Query Processing ↓ Vector Search ↓ RAG ↓ Answer</code>
        </p>
        <p>
          But this architecture hides several problems. A conventional RAG pipeline can easily spend hundreds of milliseconds on embedding generation, retrieval, reranking, and LLM inference. A hard 200ms budget meant that simply throwing a larger embedding model and an LLM at the problem wasn't going to work.
        </p>
        <p>
          So the first principle became:<br />
          <em>Optimize the architecture before optimizing the code.</em>
        </p>

        <h2>2. The Final Architecture</h2>
        <p>
          The final pipeline became considerably more defensive:
        </p>
        <pre><code>{`┌─────────────────┐
│   Voice Input   │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Speech-to-Text  │
└────────┬────────┘
         ↓
┌─────────────────┐
│   Input Guard   │
└────────┬────────┘
         ↓
┌─────────────────┐
│Query Classifier │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Query Embedding │
└────────┬────────┘
         ↓
┌──────────────┴──────────────┐
↓                             ↓
Dense Retrieval          BM25+ Retrieval
│                             │
└──────────────┬──────────────┘
               ↓
              RRF
               ↓
              MMR
               ↓
        Retrieval Guard
            ↙     ↘
      Decline     Answer
                  ↓
           Grounding Check
                  ↓
                Output`}</code></pre>
        <p>
          One important architectural decision was separating answerability from grounding. The system doesn't simply ask: <em>"Can I support this generated answer?"</em> It first asks: <em>"Do I actually have enough evidence to answer this question?"</em> That distinction turned out to be extremely important.
        </p>

        <h2>3. Chunking Was More Complicated Than Expected</h2>
        <p>
          One requirement of the task was to explore different chunking strategies rather than relying on a single fixed-size splitter. So I implemented five approaches:
        </p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Approach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Passage</td>
                <td>Up to 220 words</td>
              </tr>
              <tr>
                <td>Sentence Window</td>
                <td>3 sentences with stride 1</td>
              </tr>
              <tr>
                <td>Semantic</td>
                <td>Boundary based on semantic distance</td>
              </tr>
              <tr>
                <td>Recursive Character</td>
                <td>420 characters with overlap</td>
              </tr>
              <tr>
                <td>Fixed Window</td>
                <td>90 words with 24-word overlap</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Running all five independently would have produced almost 40,000 chunks. After reconciliation and deduplication, this became <strong>18,416 chunks</strong>. That gave us a 53.9% reduction while preserving provenance.
        </p>
        <p>
          This was one of the interesting parts of the project because chunking isn't simply <em>"What chunk size gives the best score?"</em> It is also <em>"How can multiple views of the same text coexist without exploding memory and retrieval cost?"</em>
        </p>

        <h2>4. Hybrid Retrieval</h2>
        <p>
          The retrieval system combines two fundamentally different approaches.
        </p>
        <ul>
          <li><strong>Dense retrieval:</strong> Semantic similarity is calculated using static embeddings.</li>
          <li><strong>Sparse retrieval:</strong> BM25+ handles exact lexical matches.</li>
        </ul>
        <p>
          Then the results are combined using Reciprocal Rank Fusion (RRF). Finally, Maximal Marginal Relevance (MMR) is used to diversify the results.
        </p>
        <p>
          Why not just use vector search? Because semantic search and keyword search fail differently. Dense retrieval can find something conceptually similar but miss an important exact term. BM25 can match the exact words while completely misunderstanding the intent. Combining both gives the system two different retrieval signals.
        </p>

        <h2>5. The 200ms Constraint Changed Everything</h2>
        <p>
          This was probably the most interesting part of the project. The initial instinct in an RAG system is usually: <em>Better model → better embeddings → better answers.</em>
        </p>
        <p>
          Under a strict latency budget, the equation changes. The question becomes: <em>What is the cheapest representation that gives us enough retrieval quality?</em>
        </p>
        <p>
          The embedding layer therefore became a major optimization target. The final system uses <code>minishlab/potion-retrieval-32M</code>. The important property is that it is a token-lookup based model rather than requiring a conventional transformer forward pass for every query.
        </p>
        <p>
          The measured query embedding latency was approximately <strong>0.31ms P50</strong>. That made the 200ms target much more realistic.
        </p>

        <h2>6. Measuring Every Stage</h2>
        <p>
          Instead of measuring request → response, I instrumented the pipeline at each stage.
        </p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>P50</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Input guard</td>
                <td>0.15ms</td>
              </tr>
              <tr>
                <td>Classification</td>
                <td>0.05ms</td>
              </tr>
              <tr>
                <td>Query embedding</td>
                <td>0.31ms</td>
              </tr>
              <tr>
                <td>Retrieval</td>
                <td>4.30ms</td>
              </tr>
              <tr>
                <td>Retrieval guard</td>
                <td>~0ms</td>
              </tr>
              <tr>
                <td>Generation</td>
                <td>2.43ms</td>
              </tr>
              <tr>
                <td>Verification</td>
                <td>0.79ms</td>
              </tr>
              <tr>
                <td><strong>Total:</strong></td>
                <td><strong>7.87ms P50</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          And the P100 was <strong>40.71ms</strong>. Across 927 benchmark runs, every request stayed within the 200ms core budget.
        </p>

        <h2>7. But Benchmarking Is Easy to Get Wrong</h2>
        <p>
          One thing I learned from this project is that reporting a latency number is meaningless unless you explain exactly how it was measured.
        </p>
        <p>
          For example, enabling a query cache could make repeated benchmark queries appear extremely fast. So the benchmark was intentionally run with:
        </p>
        <ul>
          <li>Query cache: OFF</li>
          <li>Warm-up: completed</li>
          <li>Repeated queries: 3 times</li>
          <li>Distinct queries: 309</li>
          <li>Total runs: 927</li>
        </ul>
        <p>
          The trace was also required to satisfy: <code>core_latency_ms = sum(all measured stages)</code>. Without trace accounting, it becomes surprisingly easy to accidentally "lose" latency between stages.
        </p>

        <h2>8. The Live HTTP Path Was Measured Separately</h2>
        <p>
          Another important distinction was between in-process latency and actual HTTP latency.
        </p>
        <p>
          The in-process benchmark achieved: <strong>P50 7.87ms | P70 9.62ms | P100 40.71ms</strong>
        </p>
        <p>
          But a real user doesn't call the Python function directly. They hit an HTTP endpoint. So I separately benchmarked the deployed service over real HTTP. The result:
        </p>
        <ul>
          <li>Server core P50: 6.04ms</li>
          <li>Client wall P50: 7.58ms</li>
          <li>Client wall P100: 60.49ms</li>
        </ul>
        <p>
          This distinction matters because benchmarking the internal function and calling the actual deployed service are two different experiments.
        </p>

        <h2>9. Guardrails: Sometimes the Correct Answer Is "I Don't Know"</h2>
        <p>
          One of the biggest design goals was preventing the system from confidently answering questions that it couldn't support. The pipeline therefore has multiple refusal paths:
        </p>
        <ul>
          <li>Unsafe request ↓ Decline</li>
          <li>Prompt injection ↓ Decline</li>
          <li>Malformed query ↓ Decline</li>
          <li>Insufficient retrieval confidence ↓ Decline</li>
          <li>Unsupported generated claim ↓ Repair / Decline</li>
        </ul>
        <p>
          The input guard runs before retrieval. This means an unsafe or malformed request can terminate before the system spends time performing expensive retrieval.
        </p>

        <h2>10. Retrieval Confidence</h2>
        <p>
          Retrieval confidence isn't based on a single number. The system combines: Dense similarity, BM25 evidence, and Query-term coverage.
        </p>
        <p>
          The reason is simple: Each individual signal can be wrong. Dense similarity can be fooled by topical similarity. BM25 can be fooled by common words. Term coverage can fail on paraphrases. But agreement between independent signals provides stronger evidence.
        </p>

        <h2>11. Grounding Is Not the Same as Answerability</h2>
        <p>
          This was probably my favorite finding from the project. It is tempting to think:<br />
          <code>Retrieved context ↓ Generated answer ↓ Does answer match context? ↓ Safe</code>
        </p>
        <p>
          But that isn't sufficient. Imagine the retrieved passage says something completely unrelated to the question. The model can generate an answer that is perfectly consistent with that passage. The answer is grounded. But it is still answering the wrong question.
        </p>
        <p>
          So the system separates <strong>Answerability</strong> ("Does my retrieved evidence actually contain enough information to answer this question?") from <strong>Grounding</strong> ("Are the claims in my final answer supported by the evidence I cited?"). These are different problems. The retrieval guard handles the first. The output verification layer handles the second.
        </p>

        <h2>12. Extractive Generation as a Safety Mechanism</h2>
        <p>
          Another deliberate choice was making extractive answering the default mode. Instead of always asking an LLM to generate arbitrary text, the system can compose an answer directly from retrieved evidence.
        </p>
        <p>
          This gives us an important property: The default answer cannot invent information that isn't present in the retrieved context. An optional LLM path can polish the answer when the latency budget allows it. But if there isn't enough budget, the system falls back to the extractive path. So instead of <code>LLM failed ↓ Error</code> the system does <code>LLM unavailable / too slow ↓ Extractive answer</code>.
        </p>

        <h2>13. Handling External Services</h2>
        <p>
          Speech-to-text and LLM providers introduce another problem: They are external dependencies. External APIs can timeout, return errors, become temporarily unavailable, or exceed the latency budget.
        </p>
        <p>
          So external calls are wrapped with bounded retries, exponential backoff, jitter, and circuit-breaker behavior. The system also supports multiple STT providers: <code>Sarvam ↓ failure ElevenLabs ↓ failure Browser Speech API</code>.
        </p>

        <h2>14. A Small Bug That Taught Me a Big Lesson</h2>
        <p>
          During development, one of the interesting problems was related to multilingual text processing. A conventional Python regex tokenizer was splitting Devanagari text incorrectly. For example, Hindi words could be broken into individual character fragments.
        </p>
        <p>
          That silently damaged the sparse retrieval index. English queries appeared fine, which made the problem particularly easy to miss.
        </p>
        <p>
          The lesson was simple: <strong>Multilingual systems need multilingual assumptions at every layer, not just multilingual models.</strong> Tokenization, normalization, chunking, metadata, evaluation, and IDs all matter.
        </p>

        <h2>15. Another Lesson: Dataset Leakage Can Hide in Metadata</h2>
        <p>
          During evaluation, I also became much more cautious about metadata. The dataset contains information derived from the original query. It would have been possible to include query-derived information in chunk metadata and accidentally make retrieval look better.
        </p>
        <p>
          So chunk metadata was deliberately generated from the passage itself rather than injecting gold-query information. The principle: <strong>Never let evaluation labels leak into the retrieval representation.</strong>
        </p>

        <h2>16. What Didn't Work</h2>
        <p>
          The most useful parts of this project were not necessarily the things that worked. Several approaches looked promising but didn't survive measurement. For example:
        </p>
        <ul>
          <li>More retrieval strategies don't automatically mean better retrieval.</li>
          <li>A larger ensemble isn't automatically worth the memory cost.</li>
          <li>Faster-looking benchmarks can simply be measuring caching.</li>
          <li>Grounding scores don't necessarily measure answerability.</li>
          <li>LLM generation isn't always the best solution.</li>
          <li>A single multilingual component doesn't solve multilingual retrieval.</li>
          <li>HTTP latency and in-process latency are different measurements.</li>
        </ul>

        <h2>17. Tech Stack</h2>
        <p>
          The project uses: Python, FastAPI, Pydantic, BM25+, Dense retrieval, RRF, MMR, Sarvam Saaras, ElevenLabs, Anthropic Claude, ai4bharat/MSMARCO-XI, Docker, pytest.
        </p>

        <h2>18. What I Learned</h2>
        <ol>
          <li><strong>Architecture beats brute force:</strong> A better architecture can matter more than a larger model.</li>
          <li><strong>Latency is a design constraint:</strong> Don't optimize after building the system. Design around the latency budget from the beginning.</li>
          <li><strong>Retrieval quality and answer quality are different:</strong> A great generator cannot compensate for bad retrieval.</li>
          <li><strong>"I don't know" is a valid output:</strong> A RAG system should know when the evidence isn't sufficient.</li>
          <li><strong>Benchmarks need methodology:</strong> A latency number without knowing the benchmark conditions is almost meaningless.</li>
          <li><strong>Multilingual systems require end-to-end thinking:</strong> Tokenizer → chunker → retriever → evaluator all need to understand the language.</li>
          <li><strong>Measure before adding complexity:</strong> If an optimization doesn't produce a measurable improvement, it may not be worth shipping.</li>
        </ol>

        <h2>Closing</h2>
        <p>
          This project started as a hackathon-style RAG challenge. It ended up teaching me something much more useful: Building an AI system isn't just about making it answer correctly. You also need to know when it should answer, when it shouldn't, where its evidence came from, how fast every stage is, what happens when dependencies fail, and whether your benchmark is actually measuring what you think it is.
        </p>
        <p>
          If you'd like to explore the implementation, the complete project is available here:
          <br />
          <a href="https://github.com/im-shourya/HHGOA-TASK2" target="_blank" rel="noopener noreferrer">GitHub: HHGOA-TASK2</a>
        </p>
      </>
    )
  },
  {
    slug: 'building-recruit-ai',
    title: 'Building RECRUIT.AI — How I Built an AI-Powered Recruitment Platform',
    excerpt: 'A deep dive into the architecture, ML pipeline, and lessons learned building an end-to-end recruitment automation tool with Next.js and Node.js.',
    date: 'Coming Soon',
    readTime: '8 min read',
    tags: ['Next.js', 'Node.js', 'AI'],
    featured: false,
  },
  {
    slug: 'kanbanflow-zero-backend',
    title: 'I Built a Zero-Backend Kanban Board with React + TypeScript — Here\'s What I Learned',
    excerpt: 'No server. No database. No login. Just pure React — and it actually works great. How I built KanbanFlow with zero backend architecture.',
    date: 'Sept 5, 2026',
    readTime: '4 min read',
    tags: ['React', 'TypeScript', 'Architecture'],
    featured: false,
    content: (
      <>
        <p>
          <strong>Why I Built KanbanFlow</strong><br />
          Every Kanban tool I used asked me to sign up, connect to a server, or pay for features I didn't need. I wanted something that just <strong>opened and worked</strong> — instantly, privately, offline.
        </p>
        <p>
          So I built <a href="https://kanbanflow.shouryaparashar.in" target="_blank" rel="noopener noreferrer">KanbanFlow</a> — a fully-featured Kanban board that lives entirely in your browser. No account. No backend. No setup.
        </p>
        
        <h2>What It Does</h2>
        <ul>
          <li><strong>Unlimited columns and tasks</strong> — fully customizable</li>
          <li><strong>Drag & drop</strong> task movement across columns</li>
          <li><strong>Priority tagging</strong> — High, Medium, Low, None</li>
          <li><strong>Due dates</strong> with overdue highlighting</li>
          <li><strong>Live search</strong> + priority filtering</li>
          <li><strong>Dark / Light theme</strong> toggle</li>
          <li><strong>Auto-saves to localStorage</strong> — data persists across sessions</li>
        </ul>
        
        <h2>Tech Stack</h2>
        <p>
          React 18 + Vite 5 + TypeScript 5 + Tailwind CSS + React Router v6
        </p>
        <p>
          No Redux. No external state library. Just React's <code>useState</code> and <code>useReducer</code> — keeping it lean.
        </p>
        
        <h2>The Interesting Part — localStorage as a Database</h2>
        <p>
          Most people reach for Firebase or Supabase immediately. But for a personal productivity tool, <code>localStorage</code> is genuinely underrated.
        </p>
        <pre><code className="language-typescript">{`// Auto-save board state on every change
useEffect(() => {
  localStorage.setItem('kanban-board', JSON.stringify(board));
}, [board]);

// Load on mount
const [board, setBoard] = useState<Board>(() => {
  const saved = localStorage.getItem('kanban-board');
  return saved ? JSON.parse(saved) : defaultBoard;
});`}</code></pre>
        <p>
          This pattern gives you:
        </p>
        <ul>
          <li>Instant persistence with zero latency</li>
          <li>Works completely offline</li>
          <li>No auth, no API keys, no cost</li>
          <li>Data stays on the user's machine (privacy win)</li>
        </ul>
        <p>
          The tradeoff? No cross-device sync. For a personal board, that's totally acceptable.
        </p>

        <h2>Drag & Drop Without a Library</h2>
        <p>
          Instead of reaching for <code>react-beautiful-dnd</code> or <code>dnd-kit</code>, I implemented drag and drop using the native HTML5 Drag and Drop API — which kept the bundle size tiny.
        </p>
        <pre><code className="language-typescript">{`const handleDragStart = (e: DragEvent, taskId: string) => {
  e.dataTransfer.setData('taskId', taskId);
};

const handleDrop = (e: DragEvent, targetColumnId: string) => {
  const taskId = e.dataTransfer.getData('taskId');
  moveTask(taskId, targetColumnId);
};`}</code></pre>

        <h2>Project Structure</h2>
        <p>
          I kept the component tree flat and predictable:
        </p>
        <pre><code>{`src/
├── types/kanban.ts         # All types + constants
├── components/kanban/
│   ├── TaskCard.tsx
│   ├── KanbanColumn.tsx
│   ├── TaskForm.tsx
│   ├── Header.tsx
│   └── Toolbar.tsx
└── pages/
    └── Index.tsx           # Main orchestrator`}</code></pre>
        <p>
          One rule I followed: <strong>no component does more than one thing</strong>. <code>KanbanColumn</code> renders a column. <code>TaskCard</code> renders a card. <code>Index.tsx</code> wires them together.
        </p>

        <h2>Try It</h2>
        <p>
          <strong>Live:</strong> <a href="https://kanbanflow.shouryaparashar.in" target="_blank" rel="noopener noreferrer">kanbanflow.shouryaparashar.in</a><br />
          <strong>GitHub:</strong> <a href="https://github.com/im-shourya/KanbanFlow" target="_blank" rel="noopener noreferrer">github.com/im-shourya/KanbanFlow</a>
        </p>
        <p>
          Built by <a href="https://shouryaparashar.in" target="_blank" rel="noopener noreferrer">Shourya Parashar</a> — Full Stack Developer.
        </p>
        <p>
          <em>If you found this useful, drop a ⭐ on GitHub — it genuinely helps!</em>
        </p>
      </>
    )
  },
  {
    slug: 'rest-api-best-practices',
    title: 'Production-Grade REST APIs: Patterns I Learned Building Task Management API',
    excerpt: 'Error handling, input validation, response patterns, and performance optimizations for Express.js APIs serving 50+ requests/minute.',
    date: 'Coming Soon',
    readTime: '7 min read',
    tags: ['Node.js', 'Express'],
    featured: false,
  },
  {
    slug: 'lighthouse-95-plus',
    title: 'How I Achieved 95+ Lighthouse Scores on My Portfolio',
    excerpt: 'Font loading strategies, image optimization, CSS performance, and the small tweaks that moved my scores from 70s to 95+.',
    date: 'Coming Soon',
    readTime: '5 min read',
    tags: ['Performance', 'SEO'],
    featured: false,
  },
  {
    slug: 'organizing-techformers',
    title: 'Organizing TECHFORMERS 1.0: Running a 1,800+ Participant Coding Competition',
    excerpt: 'Behind the scenes of designing algorithmic problems, managing real-time hackathon support, and the tools we used to run everything smoothly.',
    date: 'Coming Soon',
    readTime: '6 min read',
    tags: ['Community', 'Leadership'],
    featured: false,
  }
];
