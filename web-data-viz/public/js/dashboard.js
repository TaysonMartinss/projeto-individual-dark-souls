
const conquistas = [
  {
    name: "A Alma Negra",
    description: "Todas as conquistas foram alcançadas. Parabéns!",
    icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/22067071ea9eeb92edb952b2d65abce16e973fc7.jpg"
  },
  {
    name: "Honra de cavaleiro",
    description: "Adquira todas as armas raras.",
    icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/62149815daa726018b21bcabdf215c593f0b3d7b.jpg"
  },
  // ... mais conquistas
  {
    name: "Prece da donzela",
    description: "Adquira todos os milagres.",
    icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/2ab79f60b52940c674b2c18782c67a7ccdd623e0.jpg"
  },
  {
    name: "Arma mágica",
    description: "Adquira a melhor arma através de reforço mágico.",
    icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/7270d351362be2d3156ee4f51025a4ecfa3dbe6d.jpg"
  },

  {
    name: "Vínculo de piromante",
    description: "Adquira todas as piromancias.",
    icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/3ba9afc8fbfeaaafcd19cbb09f30a63d164e5412.jpg"
  },
  {
    name: "Arma oculta",
    description: "Adquira a melhor arma através de reforço oculto.",
    icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/76ef0fa0c688d7cd1ac9ad8c7916a7ef09c2c133.jpg"
  },
  {
    name: "Arma ígnea",
    description: "Adquira a melhor arma através de reforço ígneo.",
    icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/62e51ec42b7459b1e1714ce60544053d6929f7d3.jpg"
  },
  {
    name: "Arma cristalizada",
    description: "Adquira a melhor arma através de reforço cristalizado.",
    icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/fd8577284dd8db6457e4389cbf398550f1b894ee.jpg"
  },
  // {
  //   name: "Erudição de sábio",
  //   description: "Adquira todos os feitiços.",
  //   icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/cecb76c38356f44712e304ef2463e55e7a0dcf1e.jpg"
  // },
  // {
  //   name: "Arma caótica",
  //   description: "Adquira a melhor arma através de reforço caótico.",
  //   icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/b349c35d8e7b3322462bdd58a2f0b283a8757ea2.jpg"
  // },
  // {
  //   name: "Pacto: Guerreiro da Luz Solar",
  //   description: "Descubra o pacto do Guerreiro da Luz Solar.",
  //   icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/6545dcbc911d088d786d18aff107ccd7217be624.jpg"
  // },
  // {
  //   name: "Derrota de Priscilla Mestiça",
  //   description: "Derrote Priscilla Mestiça, a Sorvedora de Vidas.",
  //   icon_url: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570940/66ec494c0bd72ac4e3290efa1509ac78be00ee98.jpg"
  // },
];

const conquistasDiv = document.getElementById('conquistas');
conquistas.forEach(conquista => {
  const divConquista = document.createElement('div');
  divConquista.classList.add('conquista');
  divConquista.innerHTML = `
    <h3>${conquista.name}</h3>
    <img src="${conquista.icon_url}" alt="${conquista.name}">
    <p>${conquista.description}</p>
  `;
  conquistasDiv.appendChild(divConquista);
});

function mostrar(){
  var divConquistas = document.getElementById("display-conquistas");
  var divSoundtrack = document.getElementById("display-soundtrack");
  var divLateral = document.getElementById("navlateral");

  if (divConquistas.style.display === "none") {
    divConquistas.style.display = "block";
    divConquistas.style.display = "flex";
    divConquistas.style.alignItems = "center";

    divSoundtrack.style.display = "none";
    divLateral.style.borderRight = "none";
  } else {
    divConquistas.style.display = "none";
  }
}

function mostrar1(){
  var divConquistas = document.getElementById("display-conquistas");
  var divSoundtrack = document.getElementById("display-soundtrack");
  var divLateral = document.getElementById("navlateral");

  if (divSoundtrack.style.display === "none") {
    divSoundtrack.style.display = "block";
    divSoundtrack.style.display = "flex";
    divSoundtrack.style.alignItems = "center";

    divConquistas.style.display = "none";
    divLateral.style.borderRight = "none";
  } else {
    divSoundtrack.style.display = "none";
  }
}
