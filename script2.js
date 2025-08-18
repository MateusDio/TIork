const logoutBtn = document.getElementById('logout');
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const themeStorage = localStorage.getItem("tema");

if (themeStorage === "dark") {
  body.classList.add("dark");
  if (toggleBtn) toggleBtn.textContent = "☀️ Tema Claro";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const darkMode = body.classList.contains("dark");
    toggleBtn.textContent = darkMode ? "☀️ Tema Claro" : "🌙 Tema Escuro";
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

const usuarioLogado = localStorage.getItem('usuarioLogado') || 'Você';


function salvarPosts(posts) {
  localStorage.setItem('postsSalvos', JSON.stringify(posts));
}

function carregarPosts() {
  const dados = localStorage.getItem('postsSalvos');
  return dados ? JSON.parse(dados) : null;
}


function criarPost(postData, prepend = false) {
  const feed = document.getElementById('feed');
  if (!feed) return;

  const post = document.createElement('article');
  post.classList.add('post');

  const header = document.createElement('div');
  header.classList.add('post-header');

  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.style.backgroundImage = `url(${postData.avatar})`;

  const username = document.createElement('span');
  username.classList.add('username');
  username.textContent = postData.username;

  header.appendChild(avatar);
  header.appendChild(username);

  const texto = document.createElement('p');
  texto.classList.add('post-text');
  texto.textContent = postData.text;

  const actions = document.createElement('div');
  actions.classList.add('post-actions');

  const conversarBtn = document.createElement('button');
  conversarBtn.textContent = "💬 Entrar em contato";
  conversarBtn.classList.add('conversar-btn');
  conversarBtn.type = "button";
 
  conversarBtn.addEventListener('click', () => {
    conversarBtn.classList.add('pulse');
    setTimeout(() => conversarBtn.classList.remove('pulse'), 600);
  });

  actions.appendChild(conversarBtn);

  post.appendChild(header);
  post.appendChild(texto);
  post.appendChild(actions);

  if (prepend) {
    feed.prepend(post);
  } else {
    feed.appendChild(post);
  }
}


const seedPosts = [
  {
    username: "Empresa1",
    avatar: "https://i.pravatar.cc/48?img=5",
    text: "📌 VAGA: Dev React Native para MVP de marketplace simples. Orçamento: R$3.500."
  },
  {
    username: "Empresa2",
    avatar: "https://i.pravatar.cc/48?img=10",
    text: "🎨 PROJETO: Finalização de landing page responsiva. Pagamento: R$1.000."
  },
  {
    username: "Empresa3",
    avatar: "https://i.pravatar.cc/48?img=20",
    text: "💼 MANUTENÇÃO: E-commerce WordPress. Correção de bugs + otimização mensal."
  },
  {
    username: "Empresa4",
    avatar: "https://i.pravatar.cc/48?img=40",
    text: "🚀 OFERTA: Dev Backend Node.js disponível (APIs REST, GraphQL, PostgreSQL)."
  },
  {
    username: "Empresa5",
    avatar: "https://i.pravatar.cc/48?img=52",
    text: "📱 APP: Protótipo Flutter para quiz educativo (10 telas). Orçamento: R$2.000."
  }
];


salvarPosts(seedPosts);
seedPosts.forEach(post => criarPost(post));


const postForm = document.getElementById('postForm');
const postText = document.getElementById('postText');

if (postForm) {
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = (postText?.value || "").trim();

    if (!text) {
      alert("Escreva algo para postar.");
      return;
    }

    const novoPost = {
      username: usuarioLogado,
      avatar: "https://cdn-icons-png.flaticon.com/512/4519/4519678.png",
      text: text
    };

    criarPost(novoPost, true);

    const postsAtualizados = carregarPosts() || [];
    postsAtualizados.unshift(novoPost);
    salvarPosts(postsAtualizados);

    if (postText) postText.value = "";
  });
}