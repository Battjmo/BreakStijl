import {allBricks} from './bricks';
import Util from './util';


class Board {

constructor() {
  this.gameBricks = this.brickGridGenerator();
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
      gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 62);
  } else if (i === 1) {
      gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 150);
  } else {
    gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 238);
  }
    gameBricks[i] = this.rowRandomizer(gameBricks[i]);
    }

  return gameBricks;
  }


//END OF CLASS
}

export default Board;
