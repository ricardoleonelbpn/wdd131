const menu = document.querySelector("#menu");
const navegacao = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    navegacao.classList.toggle("open");
    menu.classList.toggle("open");
});
// Exibir o ano atual
const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

// Exibir a última modificação do documento
const ultimaModificacao = document.lastModified;

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao}`;