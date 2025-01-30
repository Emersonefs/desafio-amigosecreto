//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []


function adicionarAmigo() {
    let campo = document.querySelector('input').value;

    if (campo == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(campo);
        limparCampo();
        console.log(amigos);
    }

    function limparCampo() {
        campo = document.querySelector('input');
        campo.value = '';
    }

}