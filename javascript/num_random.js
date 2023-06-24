//VARIAVEIS
var numeroSecreto = parseInt(Math.random() * 11);

var contador = 0;

var resultado = document.getElementById("resultado");

var revelacao = document.getElementById("revelacao");

//FUNCOES
function Chutar() {
  contador++;
  var chute = document.getElementById("valor").value;
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns!Você acertou!";
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "Poxa... Você errou.";
    revelacao.innerHTML = "O número chutado é menor que o número secreto.";
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "Poxa... Você errou.";
    revelacao.innerHTML = "O número chutado é maior que o número secreto.";
  }
  if (contador == 3) {
    revelacao.innerHTML = "O número secreto era " + numeroSecreto + ".";
  }
}