const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  let separator = (options.separator !== undefined) ? String(options.separator) : "+";
  let addition = (options.addition !== undefined) ? String(options.addition) : "";
  let additionRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator !== undefined) ? String(options.additionSeparator) : "|";

  let newStr = "";

    for (let i = 0; i < repeatTimes; i++) {
    newStr = newStr + String(str);

      for (let j = 0; j < additionRepeatTimes; j++) {
      newStr = newStr + addition;      
      j < (additionRepeatTimes-1) ? (newStr = newStr + additionSeparator) : 0;
  }

  i < (repeatTimes - 1) ? (newStr = newStr + separator) : 0;
}
  return newStr;
};