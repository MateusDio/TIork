const logoutBtn = document.getElementById('logout');
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("tema");
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");


if (savedTheme === "dark") {
  body.classList.add("dark");
  if (themeToggle) themeToggle.textContent = "☀️ Tema Claro";
}


if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const darkMode = body.classList.contains("dark");
    themeToggle.textContent = darkMode ? "☀️ Tema Claro" : "🌙 Tema Escuro";
    localStorage.setItem("tema", darkMode ? "dark" : "light");
  });
}


if (logoutBtn) {
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const confirmar = confirm("Quer realmente sair da conta?");
    if (confirmar) {
      localStorage.removeItem('usuarioLogado');
      window.location.href = 'index.html';
    }
  });
}


if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
}

const techlogItem = document.getElementById("abrirChatTechlog");
const chatTechlog = document.getElementById("chatTechlog");
const conversasContainer = document.querySelector(".conversas-container");
const voltarBtn = document.getElementById("voltarBtn");

if (techlogItem && chatTechlog && conversasContainer && voltarBtn) {
  techlogItem.addEventListener("click", () => {
    conversasContainer.style.display = "none";
    chatTechlog.style.display = "flex";
  });

  voltarBtn.addEventListener("click", () => {
    chatTechlog.style.display = "none";
    conversasContainer.style.display = "block";
  });
}