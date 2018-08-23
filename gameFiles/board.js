import {allBricks} from './bricks';
import Util from './util';


class Board {

constructor() {
  this.gameBricks = this.brickGridGenerator();
  // this.brickCounter = this.brickCounter.bind(this);
  // this.brickCount = this.brickCounter(this.gameBricks);
}


//builds random row from premade set of shapes
rowBuilder(row, leftEdge, rowHeight) {
  // let rowXPosition = 80;
  let jumbledRow = this.shuffle(row);
  let gameRow = [];
  for (let i = 0; i < row.length; i++) {
    row[i].x = leftEdge;
    row[i].y = rowHeight;
    leftEdge += (row[i].width + 10);
    gameRow.push(row[i]);
  }
  return gameRow;
}


//picks random shapes from row to push into final
rowRandomizer(row) {
  let gameRow = [];
  for (let i = 0; i < row.length; i++) {
    if (Util.randomNumber(0, 10) < 5) {
      gameRow.push(row[i]);
    }
  }
  return gameRow;
}



//shuffles all rows
shuffle(rows) {
  for (let i = rows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rows[i], rows[j]] = [rows[j], rows[i]];
  }
  return rows;
}


//BRICK GRID POPULATOR, call two above functions
brickGridGenerator() {
  let gameBricks = [];
  let shuffledRows = this.shuffle(allBricks);
  for (let i = 0; i < 3; i++) {
    gameBricks.push(shuffledRows[i]);
  }
  for (let i = 0; i < gameBricks.length; i++) {
    if (i === 0) {
      gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 52);
  } else if (i === 1) {
      gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 140);
  } else {
    gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 218);
  }
    gameBricks[i] = this.rowRandomizer(gameBricks[i]);
    }

  return gameBricks;
  }

  //counts the bricks for score and game end purposes
  // brickCounter(brickGrid) {
  //   let brickCount = 0;
  //   for (var i = 0; i < brickGrid.length; i++) {
  //     for (var j = 0; j < brickGrid[i].length; j++) {
  //       brickCount++;
  //     }
  //   }
  //   return brickCount;
  // }

//END OF CLASS
}

export default Board;
