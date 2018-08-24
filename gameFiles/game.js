import Board from './board';
import Util from './util';

class Game {
  constructor(ctx) {
    //CANVAS
    this.canvasWidth = 700;
    this.canvasHeight = 500;
    this.ctx = ctx;
    this.Board = new Board();
    //BALL
    this.ballX = this.canvasWidth / 2;
    this.ballY = this.canvasHeight - 40;
    this.ballRadius = 13;
    this.ballColor = "#ffffff";
    this.xSpeed = 3;
    this.ySpeed = -3;
    //PADDLE
    this.paddleWidth = 100;
    this.paddleHeight = 20;
    this.paddleX = (this.canvasWidth - this.paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.hitPaddleLastFrame = false;
    //GAME
    this.score = 0;
    this.play = false;
    this.draw = this.draw.bind(this);
    this.playthis = this.playGame.bind(this);
    this.bloop = new Audio('./gameFiles/sounds/low-bloop.wav');
    this.victory = new Audio('./gameFiles/sounds/success.wav');
    var audio1 = document.getElementById("myAudio1");
    this.victory.onended = function() {
    alert("YOU WIN! PRESS RESTURN TO HAVE ANOTHER GO.");
    document.location.reload();

    };
  }



  //BALL DRAWER
  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI*2);
    this.ctx.fillStyle = this.ballColor;
    this.ctx.fill();
    this.ctx.closePath();
  }
  //PADDLE DRAWER
  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canvasHeight - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = "#e83030";
    this.ctx.fill();
    this.ctx.closePath();
  }
  //BRICK DRAWER
  drawBricks() {
    let brickCount = 0;
    for (let i = 0; i < this.Board.gameBricks.length; i++) {
      for (let j = 0; j < this.Board.gameBricks[i].length; j++) {
        if (this.Board.gameBricks[i][j].status === 1) {
          brickCount++;
          this.ctx.beginPath();
          this.ctx.rect(this.Board.gameBricks[i][j].x, this.Board.gameBricks[i][j].y, this.Board.gameBricks[i][j].width, this.Board.gameBricks[i][j].height);
          this.ctx.fillStyle = this.Board.gameBricks[i][j].color;
          this.ctx.fill();
          this.ctx.closePath();
          }
        }
      }
      if (brickCount === 0) {
        this.victory.play().onended();


      }
    }




    // COLLISION DETECTION
    collisionDetection() {
      //BALL COLLISION COORDINATES
      let ballRightX = this.ballX + this.ballRadius;
      let ballLeftX = this.ballX - this.ballRadius;
      let ballTopY = this.ballY - this.ballRadius;
      let ballBottomY = this.ballY + this.ballRadius;

        for(let c = 0; c < this.Board.gameBricks.length; c++) {
            for(let r = 0; r < this.Board.gameBricks[c].length; r++) {
                let b = this.Board.gameBricks[c][r];
                if (b.status === 1) {
                if ((ballLeftX > b.x && ballLeftX < b.x + b.width && this.ballY > b.y && this.ballY < b.y + b.height) ||
                   (ballRightX > b.x && ballRightX < b.x + b.width && this.ballY > b.y && this.ballY < b.y + b.height )) {
                     this.xSpeed = -this.xSpeed;
                     b.status = 0;
                     this.bloop.pause();
                     this.bloop.currentTime = 0;
                     this.bloop.play();
                     this.score++;
                }
                if ((this.ballX > b.x && this.ballX < b.x + b.width && ballTopY > b.y && ballTopY < b.y + b.height) ||
                  (this.ballX > b.x && this.ballX < b.x + b.width && ballBottomY > b.y && ballBottomY < b.y + b.height)) {
                     this.ySpeed = -this.ySpeed;
                     this.bloop.pause();
                     this.bloop.currentTime = 0;
                     this.bloop.play();
                     b.status = 0;
                     this.score++;
                   }
                }
              }
            }
        }


    bindKeys() {
      document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
      document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
      document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
    }

      //keypress handling
    keyDownHandler(e) {
      if(e.keyCode == 39) {
          this.rightPressed = true;
      }
      else if(e.keyCode == 37) {
          this.leftPressed = true;
      }
      else if(e.keyCode == 32) {
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
      let relativeX = e.clientX - this.canvasWidth.offsetLeft;
      if ((relativeX > (this.paddleWidth / 2)) && (relativeX < (this.canvasWidth - (this.paddleWidth / 2)))) {
        this.paddleX = relativeX - (this.paddleWidth / 2);
      }
    }

    //score func
    drawScore() {
      this.ctx.font = "20px Roboto";
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fillText("Score: " + this.score, 8, 20);
    }

    //DRAW LOOP
    draw() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.drawBricks();
      this.drawBall();
      this.drawPaddle();
      this.drawScore();
      this.collisionDetection();

      if (this.play) {

        //edges of ball
        let ballRight = this.ballX + this.ballRadius;
        let ballLeft = this.ballX - this.ballRadius;
        let ballTop = this.ballY - this.ballRadius;
        let ballBottom = this.ballY + this.ballRadius;

    //bouncing off walls
      if (this.ballX + this.xSpeed > this.canvasWidth - this.ballRadius || this.ballX + this.xSpeed < this.ballRadius) {
          this.xSpeed = -this.xSpeed;
      }
      if (this.ballY + this.ySpeed < this.ballRadius) {
          this.ySpeed = -this.ySpeed;
      }
      if ((((ballRight + this.xSpeed >= this.paddleX) && (ballRight + this.xSpeed <= this.paddleWidth + this.paddleX)) ||
           ((ballLeft + this.xSpeed >= this.paddleX) && (ballLeft + this.xSpeed <= this.paddleX - this.paddleWidth))) &&
            (ballBottom >= this.canvasHeight - this.paddleHeight)) {
              if (!this.hitPaddleLastFrame) {
                this.hitPaddleLastFrame = true;
                this.ySpeed = -this.ySpeed;
              } else {
                this.hitPaddleLastFrame = true;
              }

            } else {
              this.hitPaddleLastFrame = false;
            }
          //losing if the ball goes out the bottom
      if (this.ballY + this.ySpeed > this.canvasHeight - this.ballRadius) {
              alert("GAME OVER! PRESS ENTER TO TRY AGAIN");
              document.location.reload(true);
          }

    //moving the paddle
      if(this.rightPressed && this.paddleX < this.canvasWidth - this.paddleWidth) {
        this.paddleX += 7;
      }
      else if(this.leftPressed && this.paddleX > 0) {
          this.paddleX -= 7;
      }
    //changing ball position
      this.ballX += this.xSpeed;
      this.ballY += this.ySpeed;

    }


      requestAnimationFrame(this.draw.bind(this));

      //end of draw
    }


    //GAME LOOP
    playGame() {
      this.bindKeys();
      this.draw();
    }



  //END OF CLASS
}

Game.canvasWidth = 700;
Game.canvasHeight = 500;


export default Game;
