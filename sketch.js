var backgroundImage;
var playerCount;
var gameState = 0;
var form;
var player;
var game;
var database;

function setup(){
    database = firebase.database();

    createCanvas(400,400);
    game = new Game();
    game.gameState();
    game.start()
}

function draw(){

}