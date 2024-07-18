let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turn0 = true;
const patten = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const enabledBoxs = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerHTML="";
    }
}

const disabledBoxs = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    if (winner === "O") {
        msg.innerHTML = "Congratulation, You Win The Game ";
    }
    else {
        msg.innerHTML = "You Lost The Game";
    }
    msgContainer.classList.remove("hide");
    disabledBoxs();
}
const checkWinner = () => {
    for (ptn of patten) {
        let pos1val = boxs[ptn[0]].innerHTML;
        let pos2val = boxs[ptn[1]].innerHTML;
        let pos3val = boxs[ptn[2]].innerHTML;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
}

const resetGame = () => {
    turn0 = true;
    enabledBoxs();
    msgContainer.classList.add("hide");
}
newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);