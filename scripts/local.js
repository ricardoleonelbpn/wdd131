
// Exibir o ano atual
const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

// Exibir a última modificação do documento
const ultimaModificacao = document.lastModified;

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao}`;


function calcularSensacaoTermica(temperatura, velocidadeVento) {
    var temp = 10;
    var velo = 4.8;

    if (temperatura <= temp && velocidadeVento > velo) {
        const sensacaoTermica = 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(velocidadeVento, 0.16) + 0.3965 * temperatura * Math.pow(velocidadeVento, 0.16);
        return sensacaoTermica.toFixed(2);
    } else {
        return "N/A";
    }
    
}
const temperatura = 28;
const velocidadeVento = 12;

const elementoSensacao = document.getElementById("sensacaoTermica");

// Valor padrão
elementoSensacao.textContent = "N/A";

// Só chama a função se as condições forem atendidas
if (temperatura <= 10 && velocidadeVento > 4.8) {
    elementoSensacao.textContent =
        calcularSensacaoTermica(temperatura, velocidadeVento);
}