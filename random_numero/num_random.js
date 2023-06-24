document.addEventListener("DOMContentLoaded", function() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var contador = 0;
  var resultado = document.getElementById("resultado");
  var revelacao = document.getElementById("revelacao");

  function Chutar() {
    contador++;
    var chute = document.getElementById("valor").value;
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Parabéns! Você acertou!";
      console.log("Deu certo");
    } else if (chute < numeroSecreto) {
      console.log("Deu certo");
      resultado.innerHTML = "Poxa... Você errou.";
      revelacao.innerHTML = "O número chutado é menor que o número secreto.";
    } else if (chute > numeroSecreto) {
      console.log("Deu certo");
      resultado.innerHTML = "Poxa... Você errou.";
      revelacao.innerHTML = "O número chutado é maior que o número secreto.";
    }
    if (contador == 3) {
      console.log("Deu certo");
      revelacao.innerHTML = "O número secreto era " + numeroSecreto + ".";
    }
  }

  // Associa a função Chutar ao botão de clique
  var button = document.querySelector("button");
  button.addEventListener("click", Chutar);
});