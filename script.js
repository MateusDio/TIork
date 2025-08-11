const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');


window.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {

    }
});

btn.addEventListener('click', () => {
    const nomeValor = nome.value.trim();
    const senhaValor = senha.value.trim();


    if (nomeValor === "") {
        alert("Erro! O campo do nome está vazio!");
        return;

    } else if (senhaValor === "") {
        alert("Erro! O campo da senha está vazio!")
        return;

    }


    if (senhaValor.length < 6) {
        alert("Erro! A senha precisa ter no mínimo 6 caracteres!");
        return;
    }


    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


    const nomeExistente = usuarios.find(u => u.nome === nomeValor);
    if (nomeExistente) {
        alert("Erro! Nome de usuário já cadastrado!");
        return;
    }

    usuarios.push({ nome: nomeValor, senha: senhaValor });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuarioLogado', nomeValor);


    window.location.href = 'principal.html';


});

btn1.addEventListener('click', () => {
    const nomeValor = nome.value.trim();
    const senhaValor = senha.value.trim();


    if (nomeValor === "") {
        alert("Erro! O campo do nome está vazio!");
        return;

    } else if (senhaValor === "") {
        alert("Erro! O campo da senha está vazio!")
        return;

    }


    if (senhaValor.length < 6) {
        alert("Erro! A senha precisa ter no mínimo 6 caracteres!");
        return;
    }


    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


    const nomeExistente = usuarios.find(u => u.nome === nomeValor);
    if (nomeExistente) {
        alert("Erro! Nome de usuário já cadastrado!");
        return;
    }

    usuarios.push({ nome: nomeValor, senha: senhaValor });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuarioLogado', nomeValor);


    window.location.href = 'principal.html';


});