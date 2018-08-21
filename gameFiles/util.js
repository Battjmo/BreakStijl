//UTILITY
const Util = {

hue() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
},

//random brick draw percentage generator
randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
  }

};

export default Util;
