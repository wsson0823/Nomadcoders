const form = document.querySelector(".Guess"),
  range = document.querySelector(".range"),
  inputNum = form.querySelector(".numGuess"),
  maxNum = document.querySelector(".maxNum"),
  Chose = document.querySelector(".Chose"),
  Result = document.querySelector(".Result");

function result(myNum, randNum) {
  Chose.innerText = `You chose: ${myNum}, the machine chose ${randNum}`;
  myNum = parseInt(myNum);
  if (myNum === randNum) {
    Result.innerText = `You won!`;
  } else if (myNum > randNum || myNum < 0) {
    Result.innerText = `This is wrong number.`;
  } else {
    Result.innerText = `You lost!`;
  }
}

function makeNum(e) {
  e.preventDefault();
  const myNum = inputNum.value;
  const maxValue = range.value;
  const randNum = Math.ceil(Math.random() * maxValue);
  result(myNum, randNum);
}

function Input() {
  const maxNumValue = range.value;
  maxNum.innerText = `${maxNumValue}`;
  form.addEventListener("submit", makeNum);
}

function start() {
  range.oninput = Input;
}
start();
