# BreakStijl: An Arcade Classic Gets Arty
---

## Overview

[Play Now!](https://battjmo.github.io/BreakStijl/)

![Gameplay GIF](https://media.giphy.com/media/4N1DEonWxvf5sKOxdE/giphy.gif)

BreakStijl is a new take on the unassailable arcade classic Breakout!. Instead of a uniform field of rectangular bricks, the player is tasked with breaking down a field of procedurally generated bricks in the style of [Theo van Doesburg](https://en.wikipedia.org/wiki/Theo_van_Doesburg), founder of the [De Stijl](https://en.wikipedia.org/wiki/De_Stijl) art movement most famously championed by Piet Mondrian.

Van Doesburg's work *Composition VII (The Three Graces)* was a particular inspiration:

![Composition VII](https://github.com/Battjmo/BreakStijl/blob/master/images/Theo_van_Doesburg_Composition_VII_(the_three_graces).jpg)

The mechanics of the game are mostly classic, as attempts to improve upon this incredibly fun base game from a mechanics standpoint in the last 30 years have met with near-uniform failure.

## Architecture and Technologies

- Vanilla JS for game and level generation logic.
- HTML5 Canvas for rendering.
- WebPack to tie it all together.

## Procedural Level Generation

![Level Generation GIF](https://media.giphy.com/media/mMCKKsPIkt6lczEZBC/giphy.gif)

What sets this game apart from classic Breakout! is the procedural level generation system.

A number of bespoke rows of bricks are first assigned a semi-random color (thanks to David Merfield for his excellent Pretty Random Colors script). Then they are fed into an algorithm that places those rows in a random order on the board, then places each brick in said row onto the board in a random order with some tasteful space in between.
A final pass is made over reach row, removing each brick or not based on a semi-random chance, creating the gaps in the brick layouts that give them a much more artistic look.

```javascript
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
```

Overall, each of the 30 bricks in the set can occupy 30 different positions and either be drawn or not, resulting in 60 configurations per brick, not counting their color.
This equates to a functionally unlimited number of possible board configurations. The player should never see the same one twice!

## How to Play

The game should work in just about any browser just by clicking the link at the top of the page. It is hosted on GitHub Pages.
