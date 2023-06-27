
document.addEventListener("DOMContentLoaded", function() {
var carta1 = {
    nome: "Lince",
    imagem:
      "https://meusanimais.com.br/wp-content/uploads/2017/12/lince-1.jpg",
    atributos: {
      ataque: 5,
      defesa: 8,
      poder: 10
    }
  };
  
  var carta2 = {
    nome: "Onça",
    imagem:
      "https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2021/02/onca-pintada-saiba-tudo-sobre-o-felino-mais-poderoso-das-americas-960x679.jpg",
    atributos: {
      ataque: 10,
      defesa: 8,
      poder: 5
    }
  };
  
  var carta3 = {
    nome: "Tigre",
    imagem:
      "http://s2.glbimg.com/RFnG4EgIzgmpejlSjWA8K3apZ5M=/e.glbimg.com/og/ed/f/original/2016/04/15/tiger-02.jpg",
    atributos: {
      ataque: 10,
      defesa: 5,
      poder: 8
    }
  };
  
  var carta4 = {
    nome: "Leão",
    imagem:
      "https://www.petz.com.br/blog/wp-content/uploads/2022/01/curiosidades-sobre-leao2.jpg",
    atributos: {
      ataque: 6,
      defesa: 5,
      poder: 9
    }
  };
  
  //VARIAVEIS
  var cartas = [carta1, carta2, carta3, carta4];
  var cartaMaquina;
  var cartaJogador;
  
  //FUNÇOES
  //SROTEIO
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibeCartas();
  }
  //SELECAO ATRIBUTO
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked == true) {
        return radioAtributo[i].value;
      }
    }
  }
  //FUNCAO JOGAR
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu ! Seu atributo é maior !";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML =
        "Você perdeu ! O atributo da máquina é maior !";
    } else {
      elementoResultado.innerHTML = "Empate ! Os atributos são iguais !";
    }
    exibeAtributoMaquina();
      document.getElementById("btnJogar").disabled = true;
  }
  //EXIBIR CARTAS
  function exibeCartas() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' checked='poder' value='" +
        atributo +
        "'>" +
        atributo +
        "[ " +
        cartaJogador.atributos[atributo] +
        " ]" +
        "<br>";
    }
    var nomeJogador = `<p class=carta-subtitle>${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML =
      moldura + nomeJogador + tagHTML + opcoesTexto + "</div>";
    var divCartaMaquina = document.getElementById("carta-maquina");
    var divValorMaquina =
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nomeMaquina = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nomeMaquina + "</div>";
  }
  
  function exibeAtributoMaquina(){
    var valorMaquina=document.getElementById("valorMaquina");
    var atributoMaquina = "";
    for (var atributo in cartaMaquina.atributos) {
      atributoMaquina +=
        "<p name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        "[ " +
        cartaMaquina.atributos[atributo] +
        " ]" +
        "<br>";
    }
    valorMaquina.innerHTML= atributoMaquina;
  
  }
// Associa a função Chutar ao botão de clique

var btnJogar = document.querySelector("btnJogar");
button.addEventListener("click", jogar());

var btnSortear = document.querySelector("btnSortear");
button.addEventListener("click", sortearCarta());

});