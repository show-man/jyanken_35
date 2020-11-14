let choices = ["paper", "rock", "scissors"];
let i = Math.floor(Math.random() * 3);
let computerChoice = choices[i];
let userPoints = 0;
let computerPoints = 0;


function score(){
  let score_div = document.getElementById("score").innerHTML = userPoints + " - " + computerPoints;
}
setInterval(score, 50);
function convert(word){
  if(word === "paper") return '<i class="far fa-hand-paper"></i>';
  if(word === "rock") return '<i class="far fa-hand-rock"></i>';
  return '<i class="far fa-hand-scissors"></i>';
}

function game(userChoice){
  let box = document.getElementById("challenge");
  box.style.display = "inline-flex";
  let userDiv = document.getElementById("yourobject");
  userDiv.innerHTML = convert(userChoice);
  let computerDiv = document.getElementById("comobject");
  computerDiv.innerHTML = convert(computerChoice);
  if(userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper"){
    win();
  }
  else if(userChoice === computerChoice){
    draw();
  }
  else{
    lose();
  }
  function continueGame(){
    i =  Math.floor(Math.random() * 3);
    computerChoice = choices[i];
    box.style.display = "none";
  }
  setTimeout(continueGame, 2000);
}
function win(){
  userPoints++;
  document.getElementById("who").innerHTML = "You Win!";
}
function draw(){
  document.getElementById("who").innerHTML = "Draw!";
}
function lose(){
  computerPoints++;
  document.getElementById("who").innerHTML = "You Lose...";
}