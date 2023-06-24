let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemTouch;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload (){
  imagemDaEstrada = loadImage("./imagens/estrada.png");
  imagemTouch = loadImage("./imagens/arrow-in-circle.png");
  imagemDoAtor = loadImage ("./imagens/sonic-1.png");
  imagemCarro = loadImage("./imagens/robotnik-1.png");
  imagemCarro2 = loadImage("./imagens/robotnik-1.png");
  imagemCarro3 = loadImage("./imagens/robotnik-1.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("./sons/trilha.mp3");
  somDaColisao = loadSound("./sons/colidiu.mp3");
  somDoPonto = loadSound("./sons/pontos.wav");
}
