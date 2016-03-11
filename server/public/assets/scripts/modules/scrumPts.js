function randomNumber(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};
// console.log(randomNumber(1,9));

function scrumPts(){
  return randomNumber(1,9);
}
module.exports = scrumPts;
