
// document.addEventListener("DOMContentLoaded", function() {
    var cartaGui = {
        nome: "Motoqueiro Fantasma",
        imagem:
          "https://images.alphacoders.com/619/619885.jpg",
        atributos: {
          Ataque: 5,
          Defesa: 9,
          Magia: 10
        }
      };
      
      var cartaRo = {
        nome: "Batman",
        imagem: "https://images3.alphacoders.com/129/1297317.jpg",
        atributos: {
          Ataque: 7,
          Defesa: 8,
          Magia: 6
        }
      };
      
      var cartaRhu = {
        nome: "Wolverine",
        imagem:
          "https://images5.alphacoders.com/338/338157.jpg",
        atributos: {
          Ataque: 9,
          Defesa: 8,
          Magia: 2
        }
      };

      var cartaGa = {
        nome: "Darth Vader",
        imagem:
          "https://images3.alphacoders.com/124/1248084.jpg",
        atributos: {
          Ataque: 9,
          Defesa: 8,
          Magia: 2
        }
      };
      
      var cartaMaquina;
      var cartaJogador;
      var cartas = [cartaGui, cartaRo, cartaRhu, cartaGa];
      // 0          1           2
      
      function sortearCarta() {
        var numeroCartaMaquina = parseInt(Math.random() * 4);
        cartaMaquina = cartas[numeroCartaMaquina];
      
        var numeroCartaJogador = parseInt(Math.random() * 4);
        while (numeroCartaJogador == numeroCartaMaquina) {
          numeroCartaJogador = parseInt(Math.random() * 4);
        }
        cartaJogador = cartas[numeroCartaJogador];
        console.log(cartaJogador);
      
        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnJogar").disabled = false;
        document.getElementById("btnJogaDnv").disabled = false;
        exibirCartaJogador();
      }
      
      function obtemAtributoSelecionado() {
        var radioAtributo = document.getElementsByName("atributo");
        for (var i = 0; i < radioAtributo.length; i++) {
          if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
          }
        }
      }

      var jogoFinalizado = false;

      function jogar() {
        console.log("chamou");
        var atributoSelecionado = obtemAtributoSelecionado();
        var divResultado = document.getElementById("resultado");
      
        if (
          cartaJogador.atributos[atributoSelecionado] >
          cartaMaquina.atributos[atributoSelecionado]
        ) {
          htmlResultado = "<h1 class='resultado-final'>Venceu</h1>";
        } else if (
          cartaJogador.atributos[atributoSelecionado] <
          cartaMaquina.atributos[atributoSelecionado]
        ) {
          htmlResultado = "<h1 class='resultado-final'>Perdeu</h1>";
        } else {
          htmlResultado = "<h1 class='resultado-final'>Empatou</h1>";
        }
        divResultado.innerHTML = htmlResultado;
      
        document.getElementById("btnJogar").disabled = true;
        document.getElementById("btnJogar").disabled = true;
        exibirCartaMaquina();
      
        jogoFinalizado = true; // Define o estado do jogo como finalizado
        habilitarJogaDeNovo(); // Verifica se a função jogaDeNovo() deve ser habilitada
      }
      
      function habilitarJogaDeNovo() {
        if (jogoFinalizado) {
          document.getElementById("btnJogarNovamente").disabled = false;
        }
      }
      
      function exibirCartaJogador() {
        // Resto do código
      }
      
      function exibirCartaMaquina() {
        // Resto do código
      }
      
      function jogaDeNovo() {
        location.reload();
      }
      
      
      // function jogar() {
      //   console.log("chamou");
      //   var atributoSelecionado = obtemAtributoSelecionado();
      //   var divResultado = document.getElementById("resultado");
      
      //   if (
      //     cartaJogador.atributos[atributoSelecionado] >
      //     cartaMaquina.atributos[atributoSelecionado]
      //   ) {
      //     htmlResultado = "<h1 class='resultado-final'>Venceu</h1>";
      //   } else if (
      //     cartaJogador.atributos[atributoSelecionado] <
      //     cartaMaquina.atributos[atributoSelecionado]
      //   ) {
      //     htmlResultado = "<h1 class='resultado-final'>Perdeu</h1>";
      //   } else {
      //     htmlResultado = "<h1 class='resultado-final'>Empatou</h1>";
      //   }
      //   divResultado.innerHTML = htmlResultado;
      
      //   document.getElementById("btnJogar").disabled = true;
      //   document.getElementById("btnJogar").disabled = true;
      //   exibirCartaMaquina();
      // }
      
      // function exibirCartaJogador() {
      //   var divCartaJogador = document.getElementById("carta-jogador");
      //   divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
      //   // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
        
      //   var tagHTML = "<div id='opcoes' class='carta-status'>";
      
      //   var opcoesTexto = "";
      //   for (var atributo in cartaJogador.atributos) {
      //     opcoesTexto +=
      //       "<input type='radio' name='atributo' value='" +
      //       atributo +
      //       "'>" +
      //       atributo +
      //       " " +
      //       cartaJogador.atributos[atributo] +
      //       "<br>";
      //   }
      //   var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
      
      //   divCartaJogador.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
      // }
      
      // function exibirCartaMaquina() {
      //   var divCartaMaquina = document.getElementById("carta-maquina");
      //   divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
      //   // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
        
      //   var tagHTML = "<div id='opcoes' class='carta-status'>";
      
      //   var opcoesTexto = "";
      //   for (var atributo in cartaMaquina.atributos) {
      //     opcoesTexto +=
      //       "<p type='text' name='atributo' value='" +
      //       atributo +
      //       "'>" +
      //       atributo +
      //       " " +
      //       cartaMaquina.atributos[atributo] +
      //       "</p>";
      //   }
      //   var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
      
      //   divCartaMaquina.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
      // }

      // function jogaDeNovo(){
      //     location.reload();

      // }
    // });