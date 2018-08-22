import {allBricks} from './bricks';
import Util from './util';


class Board {

constructor() {
  this.gameBricks = this.brickGridGenerator();
  this.brickCounter = this.brickCounter.bind(this);
  this.brickCount = this.brickCounter(this.gameBricks);
}

//picks random shapes from row to push into final
rowRandomizer(row) {
  let gameRow = [];
  for (let i = 0; i < row.length; i++) {
    if (Util.randomNumber(0, 10) < 6) {
      gameRow.push(row[i]);
    }
  }
  return gameRow;
}

//shuffles all rows
brickRowShuffle(rows) {
  for (let i = rows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rows[i], rows[j]] = [rows[j], rows[i]];
  }
  return rows;
}


//BRICK GRID POPULATOR, call two above functions
brickGridGenerator() {
  let gameBricks = [];
  let shuffledRows = this.brickRowShuffle(allBricks);
  for (let i = 0; i < 3; i++) {
    gameBricks.push(shuffledRows[i]);
  }
  for (let i = 0; i < gameBricks.length; i++) {
    gameBricks[i] = this.rowRandomizer(gameBricks[i]);
    }

  return gameBricks;
  }

  //counts the bricks for score and game end purposes
  brickCounter(brickGrid) {
    console.log(brickGrid);
    let brickCount = 0;
    for (var i = 0; i < brickGrid.length; i++) {
      for (var j = 0; j < brickGrid[i].length; j++) {
        brickCount++;
      }
    }
    return brickCount;
  }

//END OF CLASS
}

export default Board;
