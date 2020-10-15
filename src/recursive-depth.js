const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }else {
      return  1 + arr.reduce((prev, current) => Math.max(this.calculateDepth(current), prev), 0);
    }
  }
};