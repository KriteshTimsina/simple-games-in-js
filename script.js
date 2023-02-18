const userInput = document.querySelector("#user-input");
const form = document.getElementById("form");
const result = document.getElementById("result");
const reloadBtn = document.getElementById("reload-btn");
let userInputValue;
let randomNumber = Math.floor(Math.random() * 10) + 1;
//handling user Input
const handleUserInput = (event) => {
  event.preventDefault();
  userInputValue = parseInt(userInput.value);

  if (!Number.isInteger(userInputValue)) return;
  else {
    result.innerHTML = `You've Guessed ${userInputValue}!`;
  }
  checkUserGuess();
};

const checkUserGuess = () => {
  if (userInputValue === randomNumber) {
    result.innerHTML = `Yayy! You guessed the correct number !🎉`;
    reloadBtn.style.display = "flex";
  }
  if (userInputValue > randomNumber) {
    result.innerHTML = `Too high! Try again! 🤔`;
  }
  if (userInputValue < randomNumber) {
    result.innerHTML = `Too low! Try again! 🤭`;
  }
};
//reload game
const reloadGame = () => {
  window.location.reload();
};
form.addEventListener("submit", handleUserInput);
reloadBtn.addEventListener("click", reloadGame);
