let userScore = 0;
let compScore = 0;
let drawScore = 0;

const Select = document.querySelectorAll(".select");
const msg = document.querySelector("#msg");
const msg_container = document.querySelector(".msg-container");
const Userscore = document.querySelector("#user-score");
const Compscore = document.querySelector("#comp-score");
const Drawscore = document.querySelector("#draw-score");
const comp_out = document.querySelector("#comp-OP");
const reset = document.querySelector("#reset");

const gameDraw = () => {
  drawScore++;
  Drawscore.innerText = drawScore;
  msg.innerText = "Game Is Draw! Play Again";
  msg_container.style.backgroundColor = "rgb(150, 133, 133)";
};

const showWinner = (userWin, Userselect, Compselect) => {
  if (userWin) {
    userScore++;
    Userscore.innerText = userScore;
    msg.innerText = `You Win! your ${Userselect} Beats ${Compselect}`;
    msg_container.style.backgroundColor = "#3dd15f";
  } else {
    compScore++;
    Compscore.innerText = compScore;
    msg.innerText = `You lose! ${Compselect} Beats Your ${Userselect}`;
    msg_container.style.backgroundColor = "#f0523a";
  }
};

const displayCompChoice = (index) => {
  if (index === 0) {
    comp_out.src = "./img/rock.png";
  } else if (index === 1) {
    comp_out.src = "./img/paper.png";
  } else {
    comp_out.src = "./img/scissors.png";
  }
};

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  displayCompChoice(randIdx);
  return option[randIdx];
};

const gamePlay = (Userselect) => {
  //Generate computer Choice
  const Compselect = genCompChoice();
  if (Userselect === Compselect) {
    //game draw
    gameDraw();
  } else {
    let userWin = true;
    if (Userselect === "rock") {
      //Compselect "scissors" or "paper"
      userWin = Compselect === "paper" ? false : true;
    } else if (Userselect === "paper") {
      //Compselect "scissors" or "rock"
      userWin = Compselect === "scissors" ? false : true;
    } else {
      //Compselect "rock" or "paper"
      //Userselect "scissors"
      userWin = Compselect === "rock" ? false : true;
    }
    showWinner(userWin, Userselect, Compselect);
  }
};

Select.forEach((select) => {
  select.addEventListener("click", () => {
    const Userselect = select.getAttribute("id");
    gamePlay(Userselect);
  });
});

reset.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  drawScore = 0;
  comp_out.src = "./img/default.png";
  Userscore.innerText = userScore;
  Compscore.innerText = compScore;
  Drawscore.innerText = drawScore;
  msg.innerText = "play your move";
  msg_container.style.backgroundColor = "rgb(150, 133, 133)";
});