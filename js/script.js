// Modo escuro
// itens
const btnDark = document.getElementById("btnDark")
const topo = document.getElementById("topo")
const home = document.getElementById("home")
const modo = document.getElementById("modo")
const baixo = document.getElementById("baixo")
const footer = document.getElementById("footer")
const label = document.getElementsByClassName('legenda')
const txtInfo = document.getElementsByClassName('txt-info')
const iconContato = document.getElementsByClassName('icon-contato')
const btnFooter = document.getElementById("btnFooter")

// consulta há preferencia salva
if (localStorage.getItem('tema') === 'dark') { 
    alternaDark();

}

// ação do botao
btnDark.addEventListener('click', () => {
  alternaDark();
  if (document.body.classList.contains('darkBody')) {
    localStorage.setItem('tema', 'dark');   // salva como "dark"
  } else {
    localStorage.setItem('tema', 'light');  // salva como "light"
  }
});

function alternaDark () {
  document.body.classList.toggle('darkBody') // habilita ou desativa o modo escuro
  topo.classList.toggle('darkTopo')
  home.classList.toggle('darkHome')
  modo.classList.toggle('darkModo')
  baixo.classList.toggle('darkBaixo')
  footer.classList.toggle('darkFooter')
  btnFooter.classList.toggle('darkBtnfooter')

  for (let item of label) {
     item.classList.toggle('darkLabel'); // percorre todos os itens com a classe label
  }
  for (let item of txtInfo) {
     item.classList.toggle('darkTxt-info'); // percorre todos os itens com a classe txt-info
  } 
  for (let item of iconContato) {
     item.classList.toggle('darkIcon-contato'); // percorre todos os itens com a classe icon-contato
  } 
}

// Scroll into view do btnFooter

btnFooter.addEventListener('click', () => {
  topo.scrollIntoView({ behavior: 'smooth' });
});

