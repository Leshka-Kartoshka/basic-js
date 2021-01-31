const CustomError = require("../extensions/custom-error");



module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
  var Years = 0;
  const k = 0.693 / HALF_LIFE_PERIOD;
  if((parseFloat(sampleActivity) <= 0)){
    return false;
  }
  else if(eval(typeof sampleActivity === "string" && parseFloat(sampleActivity) <= MODERN_ACTIVITY)){
    Years = Math.ceil(Math.log(MODERN_ACTIVITY / eval(sampleActivity)) / k);
    return Years;
  }
  else{
    return false;
  }
};