const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
   if (!Array.isArray(members)) {
        return false;
      };

let dreamTeamNameArr = members.filter(elem => typeof (elem) === 'string');
    return dreamTeamNameArr.map(elem => elem.trim()[0].toUpperCase()).sort().join('') || false;
};
