console.log('Snake, Water, Gun Game');
console.log("----------------------");
console.log("'S' for Snake\n'W' for Water\n'G' for Gun\nYou have 8 chances\n");

let choices = ['S', 'W', 'G'];
let player_points = 0;
let comp_points = 0;
let chances = 10;

while (chances > 0) {
  console.log(`${chances} chances left...!`
  )
  let player = prompt('Enter Your Choice : ');
  let comp = choices[Math.floor(Math.random() * choices.length)];
  chances -= 1;

  if (comp == 'S' && player == 'G') {
    console.log("Computer chosen 'Snake' and You chosen 'Gun'\nYou won a point...");
    player_points += 1;
  }

  else if (comp == 'W' && player == 'S') {
    console.log("Computer chosen 'Water' and You chosen 'Snake'\nYou won a point\n");
    player_points += 1;
  }

  else if (comp == 'G' && player == 'W') {
    console.log("Computer chosen 'Gun' and You chosen 'Water'\nYou won a point\n");
    player_points += 1;
  }

  else if (comp == 'S' && player == 'W') {
    console.log("Computer chosen 'Snake' and You chosen 'Water'\nComputer won a point\n");
    comp_points += 1;
  }

  else if (comp == 'W' && player == 'G') {
    console.log("Computer chosen 'Water' and You chosen 'Gun'\nComputer won a point\n");
    comp_points += 1;
  }

  else if (comp == 'G' && player == 'S') {
    console.log("Computer chosen 'Gun' and You chosen 'Snake'\nComputer won a point\n");
    comp_points += 1;
  }

  else if (comp == player) {
    console.log('You both chosen the same, So its a Tie\n');
  }

  else {
    console.log('Invalid input...\n');
  }
}
if (player_points > comp_points) {
  console.log(`You won this game with ${player_points} points...`)
}
else if (player_points < comp_points) {
  console.log(`Computer won this game with ${comp_points} points...`)
}
else if (player_points == comp_points) {
  console.log(`This game is tie with ${player_points - comp_points} points...`)
}