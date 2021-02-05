module.exports = function repeater(str, options) {
  var newstr = [];
  var substring = [];

  (options.separator != undefined)?options.separator:options.separator = '+';
  (options.additionSeparator != undefined)?options.additionSeparator:options.additionSeparator = '|';
  (options.additionRepeatTimes >= 1)?options.additionRepeatTimes:options.additionRepeatTimes = 1;
  (options.repeatTimes >= 1)?options.repeatTimes:options.repeatTimes = 1;
  (options.addition !== undefined)?options.addition:options.addition = '';

  if(options.additionRepeatTimes >= 1){
    for(var i = 0; i < options.additionRepeatTimes; i++){
      substring.push(options.addition + '');
    }
    substring = substring.join(options.additionSeparator);console.log(options.addition);
  }
  for(var i = 0; i < options.repeatTimes; i++){
      newstr.push(str + substring);
  }
  newstr = newstr.join(options.separator);
  return newstr;
  };
  