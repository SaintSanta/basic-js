const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string") {
    let activity = parseFloat(sampleActivity);
      if (activity <= MODERN_ACTIVITY && activity > 0) {
        let time = Math.ceil(Math.log(MODERN_ACTIVITY / activity) * (HALF_LIFE_PERIOD / 0.693));
        return time;
      }
  } 
  return false;
};
