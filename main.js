function rockPaperScissors() {
  const userName = document.querySelector("[data-user]");

  let userScore = document.querySelector("[data-playerCount]");
  let computerScore = document.querySelector("[data-computerCount]");
  let updateText = document.querySelector("[data-update-text]");

  const rock = document.querySelector("[data-rock]");
  const paper = document.querySelector("[data-paper]");
  const scissor = document.querySelector("[data-scissors]");

  const btnStart = document.querySelector(".btn-start");
  const btnReset = document.querySelector(".btn-reset");

  const modal = document.querySelector("#myModal");
  const span = document.getElementsByClassName("close")[0];

  const inputName = document.querySelector("#name");
  const userUpdateName = document.querySelector("#userUpdateName");

  let numOfGame = 5;
  let uScore = 0;
  let cScore = "";
  let defaultComputerScore = 0;
  let currentWinner = 0;


  //update h3 to be white
  updateText.classList.add('defaultColor');
  
  // When the user clicks on the button, open the modal
  btnStart.addEventListener("click", function () {
    modal.style.display = "block";
    uScore = 0;
    defaultComputerScore = 0;
    userScore.innerHTML = uScore;
    computerScore.innerHTML = defaultComputerScore;
    checkUserName();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // update the user name
  userUpdateName.addEventListener("click", function () {
    if (userName.innerText !== inputName.value && inputName.value !== "") {
      userName.innerText = inputName.value;
    }
    modal.style.display = "none";
    inputName.value = "";
  });

  // the game

  const computerChoice = function () {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return "rock";
    } else if (random === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  };
  // the rock button
  rock.addEventListener("click", function () {
    if (endGame() === true) {
      return;
    }
    cScore = computerChoice();
    currentWinner = checkWinner("rock", cScore);
    updateWinnerScore(currentWinner);

    updateTextUser();
    winner();
  });
  // the paper button
  paper.addEventListener("click", function () {
    if (endGame() === true) {
      return;
    }
    cScore = computerChoice();
    currentWinner = checkWinner("paper", cScore);
    updateWinnerScore(currentWinner);

    updateTextUser();
    winner();
    // console.log(computerChoice());
  });
  // the scissors button
  scissor.addEventListener("click", function () {
    if (endGame() === true) {
      return;
    }
    cScore = computerChoice();
    currentWinner = checkWinner("scissors", cScore);
    updateWinnerScore(currentWinner);

    updateTextUser();
    winner();
  });

  function winner() {
    if (uScore === numOfGame) {
      updateText.classList.add("userColor");  
      updateText.innerHTML = `Game over ${userName.innerText} won! Press start for other game!`;
    } else if (defaultComputerScore === numOfGame) {
      updateText.classList.add("computerColor"); 
      updateText.innerHTML =
        "Game over computer won! Press start for other game!";
    }

  }
  // functie end game
  function endGame() {
    if (uScore === numOfGame || defaultComputerScore === numOfGame) {
      return true;
    }
    return false;
  }

  // function to check if the user typed name
  function checkUserName() {
    if (inputName.innerText === "") {
      userName.innerText = "Player";
    }
  }
  checkUserName();

  //update text after each round
  function updateTextUser() {
    let updateTextUser = updateText;
    if (currentWinner === 1) {
      updateTextUser.classList.add("userColor");
      updateText.classList.remove("computerColor", "defaultColor");
      updateTextUser.innerHTML = `${userName.innerText} wins this round!`;
    } else if (currentWinner === 2) {
      updateTextUser.classList.add("computerColor");
      updateText.classList.remove("userColor", "defaultColor");
      updateTextUser.innerHTML = "Computer wins this round!";
    } else {
      updateTextUser.classList.add("defaultColor");
      updateTextUser.classList.remove("computerColor","userColor")
      updateTextUser.innerHTML = "This is a draw!!! Try again!";
    }
  }
  // updateTextUser();

  //reset game
  btnReset.addEventListener("click", function () {
    uScore = 0;
    defaultComputerScore = 0;
    userScore.innerHTML = uScore;
    userName.innerText = "Player";
    computerScore.innerHTML = defaultComputerScore;
    updateText.classList.add("defaultColor");
    updateText.innerHTML = "Press start for another try!";
  });

  function checkWinner(userOption, compOption) {
    switch (userOption) {
      case "rock":
        if (compOption === "rock") {
          return 0;
        }
        if (compOption === "paper") {
          return 1;
        }
        return 2;
      case "paper":
        if (compOption === "rock") {
          return 1;
        }
        if (compOption === "paper") {
          return 0;
        }
        return 2;
      case "scissors":
        if (compOption === "rock") {
          return 2;
        }
        if (compOption === "paper") {
          return 1;
        }
        return 0;
      default:
        return 0;
    }
  }

  function updateWinnerScore(currentWinner) {
    if (currentWinner === 1) {
      uScore++;
      userScore.innerHTML = uScore;
    } else if (currentWinner === 2) {
      defaultComputerScore++;
      computerScore.innerHTML = defaultComputerScore;
    }
  }
}

rockPaperScissors();
