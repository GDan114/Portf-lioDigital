// boas vindas dinâmico

const boasVindas = document.getElementById('msg');

const hora = new Date().getHours(); // retorna de 0 a 23

// Define a mensagem baseada na hora
let mensagem = '';

if (hora < 12) {
  mensagem = "Bom dia!";
} else if (hora < 18) {
  mensagem = "Boa tarde!";
} else {
  mensagem = "Boa noite!";
}

// Exibe a mensagem
boasVindas.textContent = mensagem;