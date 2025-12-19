let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#newGame");

let Play0 = true;
let count = 0;

const winnerMtd = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];


const checkWinner = () => {

    for (let Patt of winnerMtd) {

        let value1 = boxes[Patt[0]].innerText;
        let value2 = boxes[Patt[1]].innerText;
        let value3 = boxes[Patt[2]].innerText;

        if (value1 !== "" && value2 !== "" && value3 !== "") {
            if (value1 === value2 && value2 === value3) {
                showWinner(value1);
                return true;
            }
        }
    }

    return false;
};



const gamedraw = () => {
    msg.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};



boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (Play0) {
            box.innerText="O"
            box.style.color="#134d80"
            // box.style.backgroundColor="#f3ecdc";
            Play0 = false;
        } else {
            box.innerText = "X";
            box.style.color="#bc430d";
            Play0 = true;
        }

        box.disabled = true;
        count++;

        if (!checkWinner() && count === 9) {
            gamedraw();
        }
    });
});



const showWinner = (winner) => {
    if (winner=="O")
    msg.innerText = `Congratulations, Winner is Player 1 ( ${winner} )`;
else{
    msg.innerText = `Congratulations, Winner is Player 2 ( ${winner} )`;
}
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const resetGame = () => {
    Play0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
