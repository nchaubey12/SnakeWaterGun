const input=document.getElementById("choice");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission to avoid page reload
      document.getElementById("key").onclick();
    }
}); 
let choices = ['S', 'W', 'G'];
let playerPoints = 0;
let compPoints = 0;
let chances = 10;

function updateChances() {
  document.getElementById('chances').innerText = `${chances} chances left...`;
}

function updateScoreboard() {
  document.getElementById('user-points').innerText = playerPoints;
  document.getElementById('comp-points').innerText = compPoints;
}

function playGame() {
  if (chances <= 0) {
    alert('Game over. Please refresh the page to play again.');
    return;
  }

  let playerChoice = document.getElementById('choice').value.trim().toUpperCase();
  if (!choices.includes(playerChoice)) {
    alert('Invalid input. Please enter "S" for Snake, "W" for Water, or "G" for Gun.');
    return;
  }

  let compChoice = choices[Math.floor(Math.random() * choices.length)];
  chances--;

  if (compChoice === 'S' && playerChoice === 'G' ||
      compChoice === 'W' && playerChoice === 'S' ||
      compChoice === 'G' && playerChoice === 'W') {
    playerPoints++;
    document.getElementById('game-result').innerText = `You won a point!You chose ${playerChoice} and Computer chose ${compChoice}.`;
  } else if (compChoice === 'S' && playerChoice === 'W' ||
             compChoice === 'W' && playerChoice === 'G' ||
             compChoice === 'G' && playerChoice === 'S') {
    compPoints++;
    document.getElementById('game-result').innerText = `Computer won a point! Computer chose ${compChoice} and You chose ${playerChoice} .`;
  } else if (compChoice === playerChoice) {
    document.getElementById('game-result').innerText = `It's a tie! Both chose ${compChoice}.`;
  }

  updateScoreboard();
  updateChances();
  document.getElementById("choice").value = "";
}

updateChances(); // Initialize chances display
updateScoreboard(); // Initialize scoreboard display