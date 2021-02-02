// function tower(disk)
// {
//   if(disk == 1){
//     steps++;
//     return steps;
//   }
//   steps++;
//   console.log("step");
//   tower(disk-1);
//   tower(disk-1);
// }
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var turns = 1;
  var disks = disksNumber;
  var hanoiSolution = {
    turns: 0,
    seconds: 0
  }
  if(disksNumber == 1){
    turns = 1;
  }
  for(var i = 0; i < disksNumber-1; i++){
   turns = turns * 2 + 1;
  }
  hanoiSolution.turns = turns;
  hanoiSolution.seconds = Math.floor((3600 / turnsSpeed) * hanoiSolution.turns);
  return hanoiSolution;
};
