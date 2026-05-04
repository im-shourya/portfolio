#!/bin/bash

mkdir -p app/about app/services app/skills app/projects app/certifications app/experience app/leadership app/contact app/journey

create_page() {
  local dir=$1
  local comp=$2
  local extra_comp=$3
  local imports="import Header from '@/components/Header';\nimport Footer from '@/components/Footer';\nimport $comp from '@/components/$comp';"
  
  if [ -n "$extra_comp" ]; then
    imports="$imports\nimport $extra_comp from '@/components/$extra_comp';"
  fi

  local content="export default function ${dir^}Page() {
  return (
    <main className=\"min-h-screen bg-background flex flex-col\">
      <Header />
      <div className=\"flex-1 pt-20\">
        <$comp />"

  if [ -n "$extra_comp" ]; then
    content="$content\n        <$extra_comp />"
  fi

  content="$content
      </div>
      <Footer />
    </main>
  );
}"

  echo -e "$imports\n\n$content" > "app/$dir/page.tsx"
}

create_page "about" "About"
create_page "services" "Services"
create_page "skills" "TechStack"
create_page "projects" "Projects"
create_page "certifications" "Certifications"
create_page "experience" "Experience"
create_page "leadership" "Leadership"
create_page "contact" "Contact"
create_page "journey" "Experience" "Leadership"

echo "Done generating pages."
