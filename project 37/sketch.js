var database;
var gameState=0;
var contestantCount;
var quiz;
var question;
var contestant;



function setup(){
  database = firebase.database();

  quiz= new quiz ();
  quiz.getState();
  quiz.start();

  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");

  
}
