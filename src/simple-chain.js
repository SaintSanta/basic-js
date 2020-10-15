const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;    
  },

    addLink(value) {
      if (value === undefined) {
        this.arrChain.push("");
      } else
      this.arrChain.push(value);
      return this;
    },

  removeLink(position) {
    if (typeof position !== "number" || position < 0 || position > this.getLength) {
      this.arrChain = [];
      throw Error;
    }
    this.arrChain.splice(position - 1, 1);
    return this;
  },

    reverseChain() {
      this.arrChain.reverse();
      return this;
    },

  finishChain() {
    let finalArrChain = "";

    for (let link of this.arrChain) {
      finalArrChain += `( ${link} )~~`;
    }
    this.arrChain = [];
    return finalArrChain.slice(0, -2);
    }
};

module.exports = chainMaker;