module.exports = function transform(arr) {
  var newarr = [];
  if(Array.isArray(arr)){
    if(arr.length != 0){
      for(var i = 0, m = 0; i < arr.length; i++, m++){
        if(typeof arr[i] === "string"){
          switch(arr[i]){
            case "--discard-next":
              if(i < arr.length){
                i++;
              }
              break;
            case "--discard-prev":
              if(i > 0){
                newarr.splice(i-1, 1);
                m--;
              }
              break;
            case "--double-next":
              if(i < arr.length){
                newarr.push(arr[i+1]);
              }
              break;
            case "--double-prev":
              if(i > 0){
                newarr.push(arr[i-1]);
              }
              break;
          }
        }
        else{
          newarr.push(arr[i]);
        }
      }
    }
  }else{
    throw new Error("arr is not an array");
  }
};


/*


`
`*/