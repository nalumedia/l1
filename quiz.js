

let correct = 0;

function getStarted() {
    document.querySelector("question").innerHTML = ` <p>&#9918; Who won the world series this year? <input type="text" id="question1" value=""><button onclick="questionOne()">Submit Answer</button></p>`;
  }

function questionOne() {
    var answer1 = document.getElementById("question1").value;
    
    if ( answer1.toUpperCase() === 'DODGERS' || answer1.toUpperCase() === 'LA DODGERS' ) {
    document.querySelector("question").innerHTML = ` <p>Your answer ${answer1} is correct! <button onclick="questionTwo()">Next Question</button>`;
    correct += 1;
    document.querySelector("score").innerHTML = `<h1>${correct}</h1>`;
    }
    else {
        document.querySelector("question").innerHTML = ` <p>Nope ${answer1} did not win the world series in 2020! <button onclick="questionTwo()">Next Question</button>`;
    }
}

function questionTwo() {
    document.querySelector("question").innerHTML = ` <p>&#9971; Who won the Masters this year? <input type="text" id="question2" value=""><button onclick="questionTwoAnswer()">Submit Answer</button></p>`;
  }

function questionTwoAnswer() {
    var answer2 = document.getElementById("question2").value;
    
    if ( answer2.toUpperCase() === 'DJ' || answer2.toUpperCase() === 'DUSTIN JOHNSON' ) {
    document.querySelector("question").innerHTML = ` <p>Your answer ${answer2} is correct! <button onclick="questionTwo()">Next Question</button>`;
    correct += 1;
    document.querySelector("score").innerHTML = `<h1>${correct}</h1>`;
    if ( correct >= 2 ) {
        document.querySelector("question").innerHTML = `You win`;
        }

    }
    else {
        document.querySelector("question").innerHTML = ` <p>Nope ${answer2} did not win the Masters in 2020! <button onclick="questionTwo()">Next Question</button>`;
        correct -= 1;
        document.querySelector("score").innerHTML = `<h1>${correct}</h1>`;
    }
}