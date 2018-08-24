# BreakStijl: An Arcade Classic Gets Arty
---

## Overview

[Play Now!](https://battjmo.github.io/BreakStijl/)

BreakStijl is a new take on the unassailable arcade classic Breakout!. Instead of a uniform field of rectangular blocks, the player is tasked with breaking down a field of procedurally generated blocks in the style of Theo van Doesburg, founder of the De Stijl art movement most famously championed by Piet Mondrian. This work in particular was an important inpsiration:

![Composition VII](https://github.com/Battjmo/BreakStijl/blob/master/images/Theo_van_Doesburg_Composition_VII_(the_three_graces.jpg)

The mechanics of the game are mostly classic, as attempts to improve upon this incredibly fun base game from a mechanics standpoint in the last 30 years have met with near-uniform failure.

## Architecture and Technologies

- Vanilla JS for game and level generation logic.
- HTML5 Canvas for rendering.
- Webpack to tie it all together.

## Procedural Level Generation

![Level Generation GIF](https://media.giphy.com/media/mMCKKsPIkt6lczEZBC/giphy.gif)

What sets this game apart from classic Breakout! is the procedural level generation system.

A number of bespoke rows of bricks are first assigned a semi-random color (thanks to David Merfield for his excellent Pretty Random Colors script). Then they are fed into an algorithm that places those rows in a random order on the board, then places each brick in said row onto the board in a random order with some tasteful space in between.
A final pass is made over reach row, removing each brick or not based on a semi-random chance, creating the gaps in the brick layouts that give them a much more artistic look.

Overall, each of the 30 bricks in the set can occupy 30 different positions and either be drawn or not, resulting in 60 configurations per brick, not counting their color.
This equates to a functionally unlimited number of possible board configurations. The play should never see the same one twice!
