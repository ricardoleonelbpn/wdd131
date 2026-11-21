
// Exibir o ano atual
const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

// Exibir a última modificação do documento
const ultimaModificacao = document.lastModified;

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao}`;

const cutoffDate = new Date('1950-01-01');
const largeArea = 50000;

function setFiler(seletor, filterFunction) {
    const element
}

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Adicione mais objetos de templos aqui...
];

createTempleCards(templos);

function createTempleCards(templos) {
    document.querySelector('.res-grid').innerHTML = '';

    templos.array.forEach(templo => {
        let card = document.createElement("section");
        let nomeDoTemplo = document.createElement("h3");
        let localizacao = document.createElement("p");
        let consagracao = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        nomeDoTemplo.textContent = templo.nomeDoTemplo;
        localizacao.innerHTML = `<span class="label">Localização:</span ${templo.localizacao}`;
        consagracao.innerHTML = `<span class="label">Consagração:</span ${templo.consagracao}`;
        area.innerHTML = `<span class="label">Area:</span ${templo.area} area`;
        img.setAttribute("src", templo.urlDaImagem);
        img.setAttribute("alt", `Templo ${templo.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(nomeDoTemplo);
        card.appendChild(localizacao);
        card.appendChild(consagracao);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);

    });
}