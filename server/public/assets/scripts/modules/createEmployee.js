var generateName = require("./generateName.js");
var assignSkillSet = require("./assignSkillSet.js");
var scrumPts = require("./scrumPts.js");

function employee(){
  return {name: generateName(), skill: assignSkillSet(), totalScrumPts: scrumPts()};
}

// console.log(employee);

module.exports = employee;
