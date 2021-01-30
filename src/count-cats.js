const CustomError = require("../extensions/custom-error");
var cats = 0;
module.exports = function countCats(Array) {
  var cats = 0;
  for(var i = 0; i < Array.length; i++){
    for(var j = 0; j < Array[i].length; j++){
      if(Array[i][j] === "^^"){
        cats++;
      }
    }
  }
  return cats;
};
