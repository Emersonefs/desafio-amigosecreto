//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = []

function adicionarAmigo() {
    const campo = document.querySelector('input').value;

    if (campo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(campo);
    limparCampo();
    exibirlist();

}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';

}

function exibirlist() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }

}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois ammigos para sortear.")
        return;
    }

    const sorteio = [...amigos];
    let resultado = [];

    while (sorteio.length > 0) {
        const sorteado = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        resultado.push(sorteado);
    }

    exibirSorteio(resultado);

}

function exibirSorteio(listaSorteada) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    for (let i = 0; i < listaSorteada.length; i++) {
        const item = document.createElement("li");
        const amigo = listaSorteada[i];
        const amigoSecreto = listaSorteada[(i + 1) % listaSorteada.length];

        item.textContent = `${amigo} -> ${amigoSecreto}`;
        resultadoLista.appendChild(item);
    }
}