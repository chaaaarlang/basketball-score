let home = document.getElementById("home");
let guest = document.getElementById("guest");

let homeCount = 0;
function homeOne() {
  homeCount += 1;
  home.textContent = homeCount;
  showNewGameBtn();
}
function homeTwo() {
  homeCount += 2;
  home.textContent = homeCount;
  showNewGameBtn();
}
function homeThree() {
  homeCount += 3;
  home.textContent = homeCount;
  showNewGameBtn();
}

let guestCount = 0;
function guestOne() {
  guestCount += 1;
  guest.textContent = guestCount;
  showNewGameBtn();
}
function guestTwo() {
  guestCount += 2;
  guest.textContent = guestCount;
  showNewGameBtn();
}
function guestThree() {
  guestCount += 3;
  guest.textContent = guestCount;
  showNewGameBtn();
}

let newGameBtn = document.querySelector(".newGame-btn");
function showNewGameBtn() {
  newGameBtn.textContent = "New Game";
}

function newGame() {
  newGameBtn.textContent = "";
  home.textContent = 0;
  homeCount = 0;
  guest.textContent = 0;
  guestCount = 0;
}
newGame();
