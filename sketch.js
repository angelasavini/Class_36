var form , player, game;
var canvas;
var bgImage, playerCount;
var gameState = 0;
var database;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new Game()
game.getState()
game.start()

  
}

function draw(){
  
}



