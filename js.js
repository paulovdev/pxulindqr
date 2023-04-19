// MENU DROP
// Seleciona os elementos HTML relevantes para o toggle do menu
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-toggle i');
const menuDrop = document.querySelector('.menu-drop');

// Adiciona um listener para o clique no botão do toggle do menu
menuToggle.onclick = function () {

  // Adiciona ou remove a classe 'active' do menu dropdown para mostrar ou esconder o menu
  menuDrop.classList.toggle('active');

  // Verifica se o menu dropdown está aberto ou fechado e altera o ícone do botão de acordo
  const isOpen = menuDrop.classList.contains('active');
  menuIcon.classList = isOpen ? 'fa fa-close' : 'fa fa-bars';
}

// REVEALS
// Adiciona um listener para o evento de scroll da janela do navegador
window.addEventListener("scroll", reveal);

function reveal() {
  // Seleciona todos os elementos HTML com a classe 'reveal'
  var reveals = document.querySelectorAll(".reveal");

  // Itera sobre todos os elementos com a classe 'reveal'
  for (var i = 0; i < reveals.length; i++) {
    // Obtém a altura da janela do navegador e a posição do elemento atual em relação ao topo da janela
    var wHeight = window.innerHeight;
    var rTop = reveals[i].getBoundingClientRect().top;

    // Define um ponto de referência para determinar quando o elemento deve ser revelado
    var rPoint = 150;

    // Verifica se o elemento está acima do ponto de referência para revelá-lo
    if (rTop < wHeight - rPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//SCROLL TO TOP
// Seleciona o botão
const scrollBtn = document.querySelector("#scrollbtn");
scrollBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



