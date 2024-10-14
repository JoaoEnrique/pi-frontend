const puginHTML = `
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
`;

// Adiciona o HTML do VLibras ao body
document.querySelector("body").innerHTML += puginHTML;

// Cria o script dinamicamente
const script = document.createElement('script');
script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
script.onload = function() {
  // Inicializa o widget após carregar o script
  new window.VLibras.Widget('https://vlibras.gov.br/app');
};

// Adiciona o script ao body
document.body.appendChild(script);
