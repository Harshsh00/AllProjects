let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("./audio/food.mp3");
const gameOverSound = new Audio("./audio/gameover.mp3");
const moveSound = new Audio("./audio/move.mp3");
const musicSound = new Audio("./audio/music.mp3");
let speed = 19;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
];

food = {x: 6, y: 7};

// function

function main(ctime) {
  window.requestAnimationFrame(main);
  //   console.log(ctime);
  if ((ctime - lastPaintTime )/ 1000 < 2 / speed) {
    return;
  }
  lastPaintTime = ctime;

  gameEngine();
}

function isCollid(snake) {
  // hit himself
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }
// hit wall
  if(snake[0].x >= 18 || snake[0].x <= 0  ||snake[0].y >= 18 || snake[0].y <=0){
    return true;
  }
  return false;
}

function gameEngine() {
  //update snake array and food

  if (isCollid(snakeArr)) {
    gameOverSound.play();
    // musicSound.pause();
    inputDir = { x: 0, y: 0 };
    alert("Game Over, Press any key to start again");
    snakeArr = [{ x: 13, y: 15 }];
    // musicSound.play();
    score = 0;
  }

  // snake eaten food, now increase length and add score

  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodSound.play();
    //set score
    score += 1;
    //set High score
if(score>hiScoreVl){
  hiScoreVl = score;
  localStorage.setItem("hiscore: " ,JSON.parse(hiScoreVl));
  hiscoreBox.innerHTML = "hiscore : " + hiScoreVl;
}
    scoreBox.innerHTML = "score" + score;
    
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random())
    };
  }

  //moving

  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = {...snakeArr[i]};
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  // display  the snake and food

  //display snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add('head');
    } else {
      snakeElement.classList.add('snake');
    }
    board.appendChild(snakeElement);
  });

  //display food

  foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food')
  board.appendChild(foodElement);
}

// logics

let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
  hiScoreVl = 0;
  localStorage.setItem("hiscore",JSON.stringify(hiScoreVl))
}else{
  hiScoreVl = JSON.parse(hiscore);
  hiscoreBox.innerHTML = "HiScore : " + hiscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
  inputDir = { x: 0, y: 1 }
  //start game
  // moveSound.play();
  switch (e.key) {
    
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;


    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    default:
      break;
  }
});
