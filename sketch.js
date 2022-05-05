//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

// variaveis da raquete
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraraquete();
  movimentaminharaquete();
  verificacolisaoraquete ();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }
}

function mostraraquete (){
  rect(xraquete, yraquete, raquetecomprimento, raquetealtura);
  }

function movimentaminharaquete(){
  if(keyIsDown(UP_ARROW)) {
    yraquete -= 10;
    }
  if(keyIsDown(DOWN_ARROW)) {
    yraquete += 10;
  }  
}

function verificacolisaoraquete(){
 if(xBolinha - raio < xraquete + raquetecomprimento && yBolinha - raio < yraquete + raquetealtura && yBolinha + raio > yraquete){
    velocidadexBolinha *= -1;
  }
}










