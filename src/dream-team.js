const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var teamName = [];
  var reg = new RegExp(/\b\w/i);
  if(!Array.isArray(members)){
    return false;
  }
  else{
    for(var member of members){
      if(typeof member == "string"){
        teamName.push(member.toUpperCase().match(reg));
      }
    }
  }
  return teamName.sort().join('');
}