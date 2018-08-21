import Util from './util';

  let brickColumnCount = 10;
  let brickRowCount = 3;

  //brick rows
  //row 1
  let brick1 = {x: 50, y: 40, width: 20, height: 30, status: 1, color: Util.hue()};
  let brick2 = {x: 70, y: 40, width: 30, height: 40, status: 1, color: Util.hue()};
  let brick3 = {x: 100, y: 40, width: 50, height: 20, status: 1, color: Util.hue()};
  let brick4 = {x: 150, y: 40, width: 100, height: 50, status: 1, color: Util.hue()};
  let brick5 = {x: 250, y: 40, width: 20, height: 60, status: 1, color: Util.hue()};
  let brick6 = {x: 270, y: 40, width: 40, height: 50, status: 1, color: Util.hue()};
  let brick7 = {x: 310, y: 40, width: 50, height: 50, status: 1, color: Util.hue()};
  let brick8 = {x: 360, y: 40, width: 40, height: 60, status: 1, color: Util.hue()};
  let brick9 = {x: 400, y: 40, width: 30, height: 60, status: 1, color: Util.hue()};
  let brick10 = {x: 430, y: 40, width: 20, height: 30, status: 1, color: Util.hue()};


  //row2
  let brick11 = {x: 50, y: 100, width: 30, height: 30, status: 1, color: Util.hue()};
  let brick12 = {x: 80, y: 100, width: 40, height: 20, status: 1, color: Util.hue()};
  let brick13 = {x: 120, y: 100, width: 10, height: 60, status: 1, color: Util.hue()};
  let brick14 = {x: 130, y: 100, width: 60, height: 40, status: 1, color: Util.hue()};
  let brick15 = {x: 190, y: 100, width: 20, height: 50, status: 1, color: Util.hue()};
  let brick16 = {x: 210, y: 100, width: 70, height: 10, status: 1, color: Util.hue()};
  let brick17 = {x: 280, y: 100, width: 50, height: 50, status: 1, color: Util.hue()};
  let brick18 = {x: 330, y: 100, width: 40, height: 30, status: 1, color: Util.hue()};
  let brick19 = {x: 370, y: 100, width: 30, height: 60, status: 1, color: Util.hue()};
  let brick20 = {x: 400, y: 100, width: 50, height: 50, status: 1, color: Util.hue()};

  //row3
  let brick21 = {x: 50, y: 160, width: 40, height: 40, status: 1, color: Util.hue()};
  let brick22 = {x: 90, y: 160, width: 10, height: 50, status: 1, color: Util.hue()};
  let brick23 = {x: 100, y: 160, width: 50, height: 60, status: 1, color: Util.hue()};
  let brick24 = {x: 150, y: 160, width: 30, height: 30, status: 1, color: Util.hue()};
  let brick25 = {x: 180, y: 160, width: 20, height: 40, status: 1, color: Util.hue()};
  let brick26 = {x: 200, y: 160, width: 60, height: 60, status: 1, color: Util.hue()};
  let brick27 = {x: 260, y: 160, width: 10, height: 50, status: 1, color: Util.hue()};
  let brick28 = {x: 270, y: 160, width: 40, height: 30, status: 1, color: Util.hue()};
  let brick29 = {x: 310, y: 160, width: 110, height: 40, status: 1, color: Util.hue()};
  let brick30 = {x: 420, y: 160, width: 30, height: 20, status: 1, color: Util.hue()};

  // row collections
  let brickRow1 = [brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10];
  let brickRow2 = [brick11, brick12, brick13, brick14, brick15, brick16, brick17, brick18, brick19, brick20];
  let brickRow3 = [brick21, brick22, brick23, brick24, brick25, brick26, brick27, brick28, brick29, brick30];

  export const allBricks = [brickRow1, brickRow2, brickRow3];
