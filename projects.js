const projects = {
  weather: {
    title: "Weather App",
    desc: "Real-time weather forecast app using OpenWeatherMap API.",
    tech: "HTML, CSS, JS",
    link: "#"
  },
  todo: {
    title: "To-Do App",
    desc: "Task management with drag/drop, localStorage, and responsive UI.",
    tech: "JS, CSS, HTML5",
    link: "#"
  },
  portfolio: {
    title: "Portfolio Website",
    desc: "My personal site showcasing projects, blog, and contact.",
    tech: "HTML, CSS, JS, FontAwesome",
    link: "#"
  }
};

function openModal(key) {
  const modal = document.getElementById('projectModal');
  const data = projects[key];
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-desc').innerText = data.desc;
  document.getElementById('modal-tech').innerText = "Tech Stack: " + data.tech;
  document.getElementById('modal-link').href = data.link;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('projectModal').classList.add('hidden');
}
