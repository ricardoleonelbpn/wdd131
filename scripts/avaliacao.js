

const parametros = new URLSearchParams(window.location.search);

// Confere se a página foi acessada após o envio do formulário
const produto = parametros.get("produto");
const classificacao = parametros.get("classificacao");
const data = parametros.get("data");

if (produto && classificacao && data) {
    let contador = Number(localStorage.getItem("totalAvaliacoes")) || 0;

    contador++;

    localStorage.setItem("totalAvaliacoes", contador);

    document.querySelector("#contador").textContent = contador;
}

// Atualiza o ano do rodapé
document.querySelector("#ano").textContent = new Date().getFullYear();

