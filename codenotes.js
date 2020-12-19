




/* variable type */
console.log(type of thing)

/* error throwing */
throw Error(`Error message`)

/* arrow function */
const greet = (val) => {
    return `Hi, ${val}!`;
  }
/* use undefined to take an undefined value in a function param */  

/* Random number between */

let highValue = parseInt(prompt('what is the high value'));
console.log(highValue);

let lowValue = parseInt(prompt('what is the low value'));
console.log(lowValue);

getRandomNumber(lowValue, highValue);

function getRandomNumber(lowValue, highValue) {
  let randomNumber = Math.floor(Math.random() * (highValue - lowValue + 1)) + 1;
  console.log(`${randomNumber} is a random number between ${lowValue} and ${highValue}`);
}

