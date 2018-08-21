import Board from './board';
import Util from './util';

class Game {
  constructor(ctx) {

    this.ctx = ctx;
    console.log("hi constructor");
    this.Board = new Board();
    this.x = 250;
    this.y = 300;
    this.ballRadius = 10;
    this.ballColor = "#ffffff";
    this.xSpeed = 2;
    this.ySpeed = -2;
    this.paddleWidth = 75;
    this.paddleHeight = 10;
    this.paddleX = (Game.canvasWidth - this.paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.score = 0;
    this.play = false;
    this.draw = this.draw.bind(this);
    this.playGame = this.playGame.bind(this);
  }

  //BALL DRAWER
  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
    this.ctx.fillStyle = this.ballColor;
    this.ctx.fill();
    this.ctx.closePath();
  }
  //PADDLE DRAWER
  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, Game.canvasHeight - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawBricks() {
    for (let i = 0; i < this.Board.gameBricks.length; i++) {
      for (let j = 0; j < this.Board.gameBricks[i].length; j++)
        if (this.Board.gameBricks[i][j].status === 1) {
          this.ctx.beginPath();
          this.ctx.rect(this.Board.gameBricks[i][j].x, this.Board.gameBricks[i][j].y, this.Board.gameBricks[i][j].width, this.Board.gameBricks[i][j].height);
          this.ctx.fillStyle = this.Board.gameBricks[i][j].color;
          this.ctx.fill();
          this.ctx.closePath();
        }
      }
    }

    //COLLISION DETECTION
    collisionDetection() {
        for(let c = 0; c < Board.gameBricks.length; c++) {
            for(let r = 0; r < Board.gameBricks[c].length; r++) {
                let b = Board.gameBricks[c][r];
                if (b.status === 1) {
                if (this.x > b.x && this.x < b.x + b.width && this.y > b.y && this.y < b.y + b.height && (this.score <= (this.brickRowCount * this.brickColumnCount - 1))) {
                  this.dy = -this.dy;
                  b.status = 0;
                  this.score++;
                  this.ballColor = Util.hue();
                  if (this.x > b.x && this.x < b.x + b.width && this.y > b.y && this.y < b.y + b.height && (this.score === this.brickRowCount * this.brickColumnCount)) {
                    this.dy = -this.dy;
                    b.status = 0;
                    alert("YOU WON DOOD!");
                    document.location.reload();
                        }
                    }
                }
            }
        }
    }

    bindKeys() {
      document.addEventListener("keydown", this.keyDownHandler, false);
      document.addEventListener("keyup", this.keyUpHandler, false);
      document.addEventListener("mousemove", this.mouseMoveHandler, false);
      //keypress handling

    }


    keyDownHandler(e) {
      if(e.keyCode == 39) {
          this.rightPressed = true;
      }
      else if(e.keyCode == 37) {
          this.leftPressed = true;
      }
      else if(e.keyCode == 32) {
        console.log("pause triggered", this.play);
        this.play = !this.play;
      }
    }

    keyUpHandler(e) {
      if(e.keyCode == 39) {
          this.rightPressed = false;
      }
      else if(e.keyCode == 37) {
          this.leftPressed = false;
      }
    }

    //mousehandling
    mouseMoveHandler(e) {
      let relativeX = e.clientX - Game.canvasWidth.offsetLeft;
      if ((relativeX > (this.paddleWidth / 2)) && (relativeX < (Game.canvasWidth - (this.paddleWidth / 2)))) {
        this.paddleX = relativeX - (this.paddleWidth / 2);
      }
    }

    //score func
    drawScore() {
      this.ctx.font = "16px Arial";
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fillText("Score: " + this.score, 8, 20);
    }

    //DRAW LOOP
    draw() {
      this.ctx.clearRect(0, 0, Game.canvasWidth, Game.canvasHeight);
      this.drawBricks();
      this.drawBall();
      this.drawPaddle();
      this.drawScore();
      this.collisionDetection();

      if (this.play) {
    //bouncing
      if (this.x + this.dx > Game.canvasWidth - this.ballRadius || this.x + this.dx < this.ballRadius) {
          this.dx = -this.dx;
          this.ballColor = Util.hue();
      }
      if (this.y + this.dy < this.ballRadius) {
          this.dy = -this.dy;
          this.ballColor = Util.hue();
      } else if(this.y + this.dy > Game.canvasHeight - this.ballRadius) {
          if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
              this.dy = -this.dy;
              this.ballColor = Util.hue();
          }
    //losing if the ball goes out the bottom
          else {
              alert("GAME OVER");
              location.reload(true);
          }
      }
    //moving the paddle
      if(this.rightPressed && this.paddleX < Game.canvasWidth - this.paddleWidth) {
        this.paddleX += 7;
      }
      else if(this.leftPressed && this.paddleX > 0) {
          this.paddleX -= 7;
      }
    //changing ball position
      this.x += this.dx;
      this.y += this.dy;

    }

      requestAnimationFrame(this.draw.bind(this));

      //end of draw
    }


    //GAME LOOP
    playGame() {
      console.log("plyaing");
      this.bindKeys();
      this.draw();
    }



  //END OF CLASS
}

Game.canvasWidth = 500;
Game.canvasHeight = 300;

export default Game;
