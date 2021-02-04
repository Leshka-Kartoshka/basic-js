const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },

  addLink(value) {
      this.values.push(value);
      return this;
  },

  removeLink(position) {
    if(typeof position !== "number" || position < 1 || position > this.values.length){
      this.values = [];
      throw new Error();
    }else{
      this.values.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.values.reverse();
    return this;
  },

  finishChain() {
    var chain = "";
    for(var i = 0; i < this.values.length; i++){
      if(i == 0){
        chain += `( ${this.values[i]} )`;
      }
      else{
        chain += `~~( ${this.values[i]} )`
      }
    }
    this.values = [];
    return chain;
  }
};

module.exports = chainMaker;
