const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var Years;
  if(typeof eval(sampleActivity) === "number"){
    Years = Math.log(MODERN_ACTIVITY / sampleActivity) / HALF_LIFE_PERIOD;
    return Math.ceil(Years);
  }
  else{
    return false;
  }
};
