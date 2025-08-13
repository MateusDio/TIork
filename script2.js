const logoutBtn = document.getElementById('logout');
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const themeStorage = localStorage.getItem("tema");

if (themeStorage === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️ Tema Claro";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const darkMode = body.classList.contains("dark");
  toggleBtn.textContent = darkMode ? "☀️ Tema Claro" : "🌙 Tema Escuro";
  localStorage.setItem("tema", darkMode ? "dark" : "light");
});

logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const confirmar = confirm("Quer realmente sair da conta?");
  if (confirmar) {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
  }
});

const usuarioLogado = localStorage.getItem('usuarioLogado') || 'Você';

