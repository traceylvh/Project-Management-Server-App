var firstNameArray = [
   "Tom",
   "Vladimir",
   "Brady",
   "Enrique",
   "Matt",
   "Jeremy",
   "Hank",
   "Mike",
   "Riley",
   "Ryan",
   "Scott",
   "Michelle",
   "Tommy",
   "Aaron",
   "Bizaleth",
   "Carl",
   "Evan",
   "Joette",
   "Kenzie",
   "Michael",
   "Miles",
   "Tracey",
   "Roman",
   "Mark",
   "Aesop",
   "Donald",
   "Emma",
   "Thor",
   "Loki",
   "Odin",
   "Goku"
  ]

  var lastNameArray = [
    "Brady",
    "Putin",
    "Peterson",
    "Ortega",
    "Hjelmeland",
    "Elliot",
    "Harrison",
    "Bromander",
    "Chester",
    "McGrath",
    "Cook",
    "Hiebert",
    "Peaslee",
    "Kimlinger",
    "Keymer",
    "Andre",
    "Poehler",
    "Bultema",
    "Rothermal",
    "Johnson",
    "Carlson",
    "Mulcahy",
    "Wang",
    "Van Haaften",
    "Trump"
  ]

var generateName = "";
function firstName(){
  return firstNameArray[randomNumber(0, firstNameArray.length-1)];
}
function lastName(){
  return lastNameArray[randomNumber(0, lastNameArray.length-1)];
}

function nameGenerator(){
  generateName = firstName() + " " + lastName();
  return generateName;
}

function randomNumber(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};
// console.log(nameGenerator());
module.exports = nameGenerator;
