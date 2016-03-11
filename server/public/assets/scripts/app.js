// var createEmployee = require(createEmployee);

console.log("javascript loaded");

$('document').ready( function () {
  console.log("jquery loaded, document ready");

  $('.generate').on('click', generateProject);

  $('.assign').on('click', getStaff);

  $('.time').on('click', estimateTime);

  $('.add-employee').on('click', getStaff)

});

var possibleCompanies = ["acme", "general", "industries", "solutions", "electrical", "horses", "enterprises", "intrepid", "empire"];

var possibleProjectVerbs = ["eat", "direct", "activate", "dynamicize", "interface", "facilitate", "analyze", "barbeque", "detonate"];

var possibleProjectNouns = ["files", "clients", "reports", "expectations", "goals", "services", "administrators", "profits", "investments"];

var companyName;

var projectName;

var fePtsTotal;
var csPtsTotal;
var ssPtsTotal;

var totalStaff = [];

var feStaff = [];
var csStaff = [];
var ssStaff = [];

var timeEstimate = 0;

// var testStaff1 = {
//   name: "jimmy john",
//   skill: "fe",
//   pts: 8,
// }
//
// var testStaff2 = {
//   name: "wendys",
//   skill: "ss",
//   pts: 4,
// }
//
// var testStaff3 = {
//   name: "wendys",
//   skill: "cs",
//   pts: 4,
// }

function generateProject() {
  console.log("generateProject ran");

  //TODO a function here that resets the dom so you can startover


  //this sets the global company name variable to a random company name
  generateCompany();
  console.log(companyName);

  //this sets the global project name variable to a random project name
  generateProjectName();
  console.log(projectName);

  //this sets the three global pt total variables to random numbers
  generateProjectPts();
  console.log("front end ", fePtsTotal, "\n",
              "client side ", csPtsTotal, "\n",
              "server side ", ssPtsTotal
  );
  $('.fe-pts-needed').text(fePtsTotal);
  $('.cs-pts-needed').text(csPtsTotal);
  $('.ss-pts-needed').text(ssPtsTotal);

  //TODO create the rest of the page except for assign staff button
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function generateCompany() {
  companyName = possibleCompanies[randomNumber(0, possibleCompanies.length - 1)];
  companyName += " " + possibleCompanies[randomNumber(0, possibleCompanies.length - 1)];
  $('.company-name').text(companyName);
}

function generateProjectName() {
  projectName = possibleProjectVerbs[randomNumber(0, possibleProjectVerbs.length - 1)];
  projectName += " " + possibleProjectNouns[randomNumber(0, possibleProjectNouns.length - 1)];
  $('.project-name').text(projectName);
}

function generateProjectPts() {
  fePtsTotal = randomNumber(10, 60);
  csPtsTotal = randomNumber(10, 60);
  ssPtsTotal = randomNumber(10, 60);
}

function assignStaff(temp) {
  console.log("assign staff ran");

  //then we look at the object and sort it into an array based on its skill
  if (temp.skill == "fe") {
    feStaff.push(temp);
  } else if (temp.skill == "cs") {
    csStaff.push(temp);
  } else if (temp.skill == "ss") {
    ssStaff.push(temp);
  }

  console.log("front end staff: ", feStaff, "\n",
              "client side staff: ", csStaff, "\n",
              "server side staff ", ssStaff);

  //then we look at all of the arrays, if one of them is empty, we go get a staff person
  if (feStaff.length == 0 || csStaff.length == 0 || ssStaff.length == 0) {
    getStaff();
  }
  // estimateTime();
}

function getStaff() {
  $.ajax( {
    type: "GET",
    url: "/staff",
    success: function(data){
      assignStaff(data);
      appendDom(data);
      estimateTime();

    }
  });

}

function appendDom(staff){
    $('.staff-list').append('<div class="employee"></div>');

    var $col = $('.staff-list').children().last();
    $col.append('<span class="employee-name">' + staff.name + '</span>, ');
    $col.append('<span class="skillset">Skillset: ' + staff.skill + '</span>,   ');
    $col.append('<span class="scrum-pts"> Scrum Points: ' + staff.totalScrumPts + '</span>');

    $('.add-employee').removeClass('hidden');
}

function estimateTime() {
  var feEstimate =  fePtsTotal / sumStaffPts(feStaff);
  console.log(feEstimate);

  var csEstimate = csPtsTotal / sumStaffPts(csStaff);
  console.log(csEstimate);

  var ssEstimate = ssPtsTotal / sumStaffPts(ssStaff);
  console.log(ssPtsTotal);

  if (feEstimate > csEstimate && feEstimate > ssEstimate) {
    timeEstimate = feEstimate;
  } else if (csEstimate > feEstimate && csEstimate > ssEstimate ) {
    timeEstimate = csEstimate;
  } else if (ssEstimate > feEstimate && ssEstimate > csEstimate) {
    timeEstimate = ssEstimate;
  }
  //end by appending timeEstimate to the dom
  $('.time-estimate').text(timeEstimate.toFixed(2));
}

function sumStaffPts(array) {
  var departmentCapacity = 0;
  for (var i = 0; i < array.length; i++) {
    departmentCapacity += array[i].totalScrumPts;
  }
  return departmentCapacity
}

// function addOneEmployee(){
//   getStaff();
// }
