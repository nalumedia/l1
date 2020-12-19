
let playerscore = 0; 
let computerscore = 0;
let totalThrows = 0;
let ties = 0;

// player throws counts
let playerRock = 0;
let playerPaper = 0;
let playerScissors = 0;
let playerPercentRock = 0;
let playerPercentPaper = 0;
let playerPercentScissors = 0;

// computer throw counts
let computerRock = 0;
let computerPaper = 0;
let computerScissors = 0;
let computerPercentRock = 0;
let computerPercentPaper = 0;
let computerPercentScissors = 0;

// let toss = prompt("what is your throw");

// let toss = document.getElementById("your_toss").value;

// get style name

function setRock() {
  document.getElementById("currentchoice").innerHTML = `rock`;
  // document.getElementById("rock").innerHTML = `<img src="/images/rockattack.png" onmouseover="setRock()" onclick="yourToss()">`;

}

function backRock() {
  console.log("back rock");
  document.getElementById("rock").innerHTML = `<img src="/images/rock.png" onmouseover="setRock()" onclick="yourToss()">`;
}

function setPaper() {
  document.getElementById("currentchoice").innerHTML = `paper`;

}

function setScissors() {
  document.getElementById("currentchoice").innerHTML = `scissors`;

}

function yourToss() {
    var userThrow = document.getElementById("currentchoice").innerHTML;
    let toss = userThrow;
    totalThrows += 1;
    document.getElementById("totalThrows").innerHTML = `<h2>${totalThrows}</h2>`;

    // generate computer toss
    let computer = Math.floor( Math.random() * 3 ) + 1;
  
    if ( computer === 1 ) {
      computerThrow = 'rock';
      computerThrowImage = '/images/rock.png';
    }
      else if  ( computer === 2 ) {
      computerThrow = 'paper';
      computerThrowImage = '/images/paper.png';
      }
      else if ( computer === 3 ) {
      computerThrow = 'scissors';
      computerThrowImage = '/images/scissors.png';
      }
    
    document.getElementById("opponent_one").innerHTML = `<img src="${computerThrowImage}">`;

    if ( toss === computerThrow ) {
      document.getElementById("outcome").innerHTML = `<h2>tie</h2>`;
      document.getElementById("toss").innerHTML = `${toss} ties ${computerThrow}`;
      ties +=1;
      document.getElementById("gameresults2").innerHTML = `<h2>${ties}</h2>`;
        if ( toss === "rock" ) {
        playerRock +=1;
        computerRock +=1;
        document.getElementById("playerrock").innerHTML = `${playerRock}`;
        document.getElementById("computerRock").innerHTML = `${computerRock}`;
        }
        else if ( toss === "paper") {
        playerPaper +=1;
        computerPaper +=1;
        document.getElementById("playerPaper").innerHTML = `${playerPaper}`;
        document.getElementById("computerPaper").innerHTML = `${computerPaper}`;
        }
        else if ( toss === "scissors") {
          playerScissors +=1;
          computerScissors +=1;
          document.getElementById("playerScissors").innerHTML = `${playerScissors}`;
          document.getElementById("computerScissors").innerHTML = `${computerScissors}`;
          }

    }
    else if ( toss === "rock" && computerThrow === "paper" ) {
      document.getElementById("outcome").innerHTML = `<h2>you lose</h2>`;
      document.getElementById("toss").innerHTML = `rock gets covered by paper`;
      computerscore +=1;
      document.getElementById("computerone2").innerHTML = `<h2>${computerscore}</h2>`;
      playerRock +=1;
      document.getElementById("playerrock").innerHTML = `${playerRock}`;
      computerPaper +=1;
      document.getElementById("computerPaper").innerHTML = `${computerPaper}`;
    }
    else if ( toss === "rock" && computerThrow === "scissors" ) {
      document.getElementById("outcome").innerHTML = `<h2>you win</h2>`;
      document.getElementById("toss").innerHTML = `rock crushes scissors`;
      playerscore +=1;
      document.getElementById("playerone2").innerHTML = `<h2>${playerscore}</h2>`;
      playerRock +=1;
      document.getElementById("playerrock").innerHTML = `${playerRock}`;
      computerScissors +=1;
      document.getElementById("computerRock").innerHTML = `${computerScissors}`;
    }

    else if ( toss === "paper" && computerThrow === "scissors" ) {
      document.getElementById("outcome").innerHTML = `<h2>you lose</h2>`;
      document.getElementById("toss").innerHTML = `paper gets cut by scissors`;
      computerscore +=1;
      document.getElementById("computerone2").innerHTML = `<h2>${computerscore}</h2>`;
      playerPaper +=1;
      document.getElementById("playerPaper").innerHTML = `${playerPaper}`;
      computerScissors +=1;
      document.getElementById("computerScissors").innerHTML = `${computerScissors}`;
    }
    else if ( toss === "paper" && computerThrow === "rock" ) {
      document.getElementById("outcome").innerHTML = `<h2>you win</h2>`;
      document.getElementById("toss").innerHTML = `paper covers rock`;
      playerscore +=1;
      document.getElementById("playerone2").innerHTML = `<h2>${playerscore}</h2>`;
      playerPaper +=1;
      document.getElementById("playerPaper").innerHTML = `${playerPaper}`;
      computerRock +=1;
      document.getElementById("computerRock").innerHTML = `${computerRock}`;
    }

    else if ( toss === "scissors" && computerThrow === "rock" ) {
      document.getElementById("outcome").innerHTML = `<h2>you lose</h2>`;
      document.getElementById("toss").innerHTML = `scissors gets crushed by rock`;
      computerscore +=1;
      document.getElementById("computerone2").innerHTML = `<h2>${computerscore}</h2>`;
      playerScissors +=1;
      document.getElementById("playerScissors").innerHTML = `${playerScissors}`;
      computerRock +=1;
      document.getElementById("computerRock").innerHTML = `${computerRock}`;
    }
    else if ( toss === "scissors" && computerThrow === "paper" ) {
      document.getElementById("outcome").innerHTML = `<h2>you win</h2>`;
      document.getElementById("toss").innerHTML = `scissors cuts paper`;
      playerscore +=1;
      document.getElementById("playerone2").innerHTML = `<h2>${playerscore}</h2>`;
      playerScissors +=1;
      document.getElementById("playerScissors").innerHTML = `${playerScissors}`;
      computerPaper +=1;
      document.getElementById("computerPaper").innerHTML = '${computerPaper}';
    }
    // player stats
    // set player percent rock
    playerPercentRock = Math.floor((100 * (parseFloat(playerRock / totalThrows).toFixed(2))))+"%";
    document.getElementById("playerPercentRock").innerHTML = `${playerPercentRock}`;
    // set player percent paper 
    playerPercentPaper = Math.floor((100 * (parseFloat(playerPaper / totalThrows).toFixed(2))))+"%";
    document.getElementById("playerPercentPaper").innerHTML = `${playerPercentPaper}`;
    // ser player percent scissors
    playerPercentScissors = Math.floor((100 * (parseFloat(playerScissors / totalThrows).toFixed(2))))+"%";
    document.getElementById("playerPercentScissors").innerHTML = `${playerPercentScissors}`;

    //computer stats 
    // set computer percent rock
    computerPercentRock = Math.floor((100 * (parseFloat(computerRock / totalThrows).toFixed(2))))+"%";
    document.getElementById("computerPercentRock").innerHTML = `${computerPercentRock}`;
    // set player percent paper 
    computerPercentPaper = Math.floor((100 * (parseFloat(computerPaper / totalThrows).toFixed(2))))+"%";
    document.getElementById("computerPercentPaper").innerHTML = `${computerPercentPaper}`;
    // ser player percent scissors
    computerPercentScissors = Math.floor((100 * (parseFloat(computerScissors / totalThrows).toFixed(2))))+"%";
    document.getElementById("computerPercentScissors").innerHTML = `${computerPercentScissors}`;
  
  }



