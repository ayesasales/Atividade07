// 1. Exibir uma mensagem de alerta e uma mensagem no console
alert("Esta é uma mensagem de alerta.");
console.log("Mensagem exibida no console.");

// 2. Acesso ao objeto window e dimensões da janela do navegador.
const largura = window.innerWidth;
const altura = window.innerHeight;
console.log(`Dimensões da janela: Largura = ${largura}, Altura = ${altura}`);

// 3. Manipulação do Local Storage.
localStorage.setItem("meuValor", "Olá, Local Storage!");
const valorRecuperado = localStorage.getItem("meuValor");
console.log(`Valor recuperado do Local Storage: ${valorRecuperado}`);

// 4. Criação de elementos HTML.
const meuDiv = document.getElementById("meuDiv");
meuDiv.innerText = "texto do meuDiv";
meuDiv.style.color = "black";
meuDiv.style.fontSize = "20px";

// 5. Modificação de elementos existentes.
const meuParagrafo = document.getElementById("meuParagrafo");
meuParagrafo.innerText = "Este parágrafo foi alterado.";
meuParagrafo.style.backgroundColor = "orange";

// 6. Manipulação de atributos.
const minhaImagem = document.getElementById("minhaImagem");
minhaImagem.setAttribute("title", "Imagem dinâmica");

// 7. Eventos de Click.
const botaoAlterar = document.getElementById("botaoAlterar");
botaoAlterar.addEventListener("click", function() {
    meuDiv.innerText = "Conteúdo do Div alterado!";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("A tecla Enter foi pressionada!");
    }
});

// 9. Criação de uma lista dinâmica.
const minhaLista = document.getElementById("minhaLista");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const novoItemInput = document.getElementById("novoItem");

botaoAdicionar.addEventListener("click", function() {
    const novoItemTexto = novoItemInput.value;
    if (novoItemTexto) {
        const novoLi = document.createElement("li");
        novoLi.innerText = novoItemTexto;

        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "Remover";
        botaoRemover.addEventListener("click", function() {
            minhaLista.removeChild(novoLi);
        });

        novoLi.appendChild(botaoRemover);
        minhaLista.appendChild(novoLi);
        novoItemInput.value = ""; // Limpa o input
    } else {
        alert("Por favor, insira um item.");
    }
});