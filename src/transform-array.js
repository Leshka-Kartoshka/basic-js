module.exports = function transform(arr) {
  var newarr = [];
  if(Array.isArray(arr)){
    if(arr.length != 0){
      for(var i = 0, m = 0; i < arr.length; i++, m++){
        switch(arr[i]){
          case undefined:
            break;
          case "--discard-next":
            if(i < arr.length){
              i++;
            }
            break;
          case "--discard-prev":
            if(i > 0 && arr[i-1] != undefined && arr[i-2] != "--discard-next"){
            newarr.pop();
            m--;
            }
            break;
          case "--double-next":
            if(i < arr.length && arr[i+1] != undefined){
              newarr.push(arr[i+1]);
            }
            break;
          case "--double-prev":
            if(i > 0 && arr[i-1] != undefined && arr[i-2] != "--discard-next"){
              newarr.push(arr[i-1]);
            }
            break;
          default:
            newarr.push(arr[i]);
            break;
        }
      }
    }
  }else{
    throw new Error("arr is not an array");
  }
  return newarr;
};