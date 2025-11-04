const form = document.getElementById('formulario')
const mensagem = document.getElementById('mensagemForm');

form.addEventListener("submit", function(evento){
    evento.preventDefault();

    const dados = new FormData(form) // pegar dados do form

    const nome = dados.get('nome')

    mensagem.textContent = `Obrigado ${nome}, sua mensagem foi enviada com sucesso ;)`;
    mensagem.style.display = "block";

  // esconde a mensagem depois de 3 segundos
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 4000);

  // Aqui você pode limpar os campos do formulário, se quiser
  
})