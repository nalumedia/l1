

// let toss = prompt("what is your throw");

function yourToss() {
    var toss = document.getElementById("your_toss").value;
    document.getElementById("toss").innerHTML = `<h1>You threw: ${toss}`;
    document.getElementById("opponent_one").innerHTML = `<h1>Computer threw: Scissors`;
  }

