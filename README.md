# BreakStijl: An Arcade Classic Gets Arty
---

## Overview

[Play Now!](https://battjmo.github.io/BreakStijl/)

BreakStijl is a new take on the unassailable arcade classic Breakout. Instead of a uniform field of rectangular blocks, the player is tasked with breaking down a field of procedurally generated blocks in the style of Theo van Doesburg, founder of the De Stijl art movement most famously championed by Piet Mondrian.

The mechanics of the game will be mostly classic, as attempts to improve upon this incredibly fun base game from a mechanics standpoint in the last 30 years have met with near-uniform failure.

## Functionality and MVP's

The player will be able to:

- [ ] Generate a near-infinite number of van Doesburg-inpsired playing fields.
- [ ] Be greeted by fun sound effect when they collide with the blocks composing said field.
- [ ] Start, pause, and restart the game.
- [ ] Play some dang breakout.

It will also feature modals describing the game itself, as well as the artist and movement that inspired it.

## Wireframe

![Wireframe](https://github.com/Battjmo/BreakStijl/blob/master/images/breakstyle-wireframe.svg)

## Architecture and Technologies

- Vanilla JS for game and level generation logic.
- HTML5 Canvas for rendering.
- Webpack to tie it all together.

#### Script Files:

- board.js: Will contain logic for setting up the randomly generate board.
- sounds.js: Will hold the sound effects.
- shapes.js: Will store the shapes used for the procedural generation.
- breakout.js: Will contain logic for the asteroids game itself.


## Implementation Timeline

### Over the Weekend:

- [ ] Got the basic breakout game working, which is already fun to the point of distraction and very colorful.

- [ ] Began research into procedurally generating de Stijl shape layouts.

### Day 1: Setup webpack and begin shape work:

- [ ] Make database of shapes for level generator.

- [ ] Test them out in the breakout field using existing generator.

### Day 2: Build out the procedural generator:

- [ ] Implement a system by which my database of shapes can be placed on the screen without overlapping each other.

### Day 3: Sounds and fine tuning:

- [ ] Add sound effects to the game that trigger on hitting blocks, winning, and losing the game.

- [ ] Continue work on the level generator if required.

### Day 4: Finishing up:

- [ ] Implement play, pause, restart, and mute buttons
- [ ] Finish anything from the previous days that isn't done.


## Bonus Features

- [ ] Cause the blocks to fall toward the player on impact, for an added degree of difficulty, with a button to toggle this on and off.

- [ ] Add other artist configurations, starting with Rothko (which would involve drawing fuzzy rectangles to be implemented as fills rather than solid colors).

- [ ] Add the ability to save the fields (free arts!).
