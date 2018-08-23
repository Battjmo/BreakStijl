//UTILITY

const Util = {

hue() {
  //Now calls the randomColor script, used to used this function:
  // return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var color = randomColor();
  return color;
},

//random brick draw percentage generator
randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
  }

};

export default Util;
