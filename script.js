let box = document.querySelectorAll(".box");
let gamevalue = "X";
let reset = document.querySelector("button");
let winner = document.querySelector("h1");
let gameover = false;

function gameenter() {
  gamevalue = gamevalue === "X" ? "O" : "X";
}

function gamewinner() {
  let winchances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // console.log(winchances)
  winchances.forEach((e) => {
    if ( box[e[0]].innerText !== "" && box[e[0]].innerText === box[e[1]].innerText &&
      box[e[1]].innerText === box[e[2]].innerText) {
      winner.innerHTML = "winner" + gamevalue;
      gameover = true;
    }
  });
}

Array.from(box).forEach((boxitem) => {
  boxitem.addEventListener("click", () => {
    // this if condition prevents cheating. you can't change the Value once its stored.
    if (boxitem.innerText === "" && !gameover) {
      gameenter();
      boxitem.innerHTML = gamevalue;
      gamewinner();
    }
  });
});

reset.addEventListener("click", () => {
  Array.from(box).forEach((boxitem) => {
    boxitem.innerHTML = null;
    gameover = false;
    winner.innerHTML = "";
    console.clear();
  });
});
