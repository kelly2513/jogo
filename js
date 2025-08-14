 const numeroCorreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const maxTentativas = 3;

function jogar(palpite) {
  tentativas++;

  if (tentativas > maxTentativas) {
    console.log("Você perdeu, número de tentativas esgotado.");
    return;
  }

  if (palpite === numeroCorreto) {
    console.log("Parabéns! Você acertou!");
  } else if (palpite < numeroCorreto) {
    console.log("O número secreto é maior.");
  } else {
    console.log("O número secreto é menor.");
  }

  if (tentativas === maxTentativas && palpite !== numeroCorreto) {
    console.log(`Fim de jogo. O número correto era ${numeroCorreto}.`);
  }
}

function verificar() {
  const numero = parseInt(document.getElementById("palpite").value);
  document.getElementById("resposta").textContent = "Você digitou: " + numero;
  jogar(numero);
