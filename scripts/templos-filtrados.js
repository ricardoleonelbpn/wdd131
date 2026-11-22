
// Exibir o ano atual
const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

// Exibir a última modificação do documento
const ultimaModificacao = document.lastModified;

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao}`;


const container = document.querySelector('.res-grid');

const botaoMenu = document.querySelector("#menu");
const navegacao = document.querySelector(".navigation");

botaoMenu.addEventListener("click", () => {

    navegacao.classList.toggle("open");
    botaoMenu.classList.toggle("open");

});

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005-08-07",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888-05-21",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015-06-07",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020-05-02",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974-11-19",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986-01-10",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983-12-02",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  {
    nomeDoTemplo: "Sao Paulo Brasil",
    localizacao: "Sao Paulo, Brasil",
    consagracao: "1978-09-02",
    area: 59246,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },

  {
    nomeDoTemplo: "Rio de Janeiro Brasil",
    localizacao: "Rio de Janeiro, Brasil",
    consagracao: "2022-05-08",
    area: 29966,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
  },
];

createTempleCards(templos);

function setFilter(seletor, filterFunction) {
    const element = document.querySelector(seletor);

    element.addEventListener('click', (event) => {
        event.preventDefault();
        createTempleCards(templos.filter(filterFunction));
    });
}

setFilter('#inicio', () => true);
setFilter('#antigo', templo =>
    new Date(templo.consagracao).getFullYear() < 1900
);
setFilter('#novo', templo =>
    new Date(templo.consagracao).getFullYear() > 2000
);
setFilter('#grande', templo => templo.area > 90000);
setFilter('#pequeno', templo => templo.area < 10000);  

function createTempleCards(templos) {
    container.innerHTML = '';

    templos.forEach(templo => {
        let card = document.createElement("section");
        let nomeDoTemplo = document.createElement("h3");
        let localizacao = document.createElement("p");
        let consagracao = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        nomeDoTemplo.textContent = templo.nomeDoTemplo;
        localizacao.innerHTML = `<span class="label">Localização:</span> ${templo.localizacao}`;
        consagracao.innerHTML = `<span class="label">Consagração:</span> ${templo.consagracao}`;
        area.innerHTML = `<span class="label">Area:</span> ${templo.area} area`;
        img.setAttribute("src", templo.urlDaImagem);
        img.setAttribute("alt", `Templo ${templo.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(nomeDoTemplo);
        card.appendChild(localizacao);
        card.appendChild(consagracao);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);

    });
}