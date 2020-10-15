const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ("--discard-next") && arr[i] !== ("--discard-prev") && arr[i] !== ("--double-next" ) && arr[i] !== ("--double-prev")) {
      array.push(arr[i]);
    } else if (arr[i] === "--discard-next" && arr[i + 1] !== undefined) {
      i++;
    } else if (arr[i] === "--discard-prev" && arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next") {
      array.pop(arr[i - 1]);
    } else if (arr[i] === "--double-next" && arr[i + 1] !== undefined) {
      array.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev" && arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next") {
      array.push(arr[i - 1])
    }
  }
    return array;
};
