function addTwo(num1, num2){
  return num1 + num2;
}

function addThree(num1, num2, num3){
  return num1 + num2 + num3;
}

function multiplyTwo(num1, num2){
  return num1 * num2;
}

function reverseWord(word){
  return word.split("").reverse().join("");
}

function increaseByPercentage(perc, inc){
  return perc + perc * (inc/100);

}

function celciusToFahrenheit(temp){
  return temp * 1.8 + 32;
}

function fahrenheitToCelcius(temp){
  return (temp - 32) * 5 / 9;
}

function stripVowels(vowels){
  return vowels.replace(/[aeiou]/ig,'');
}
// do not delete
runTests();




Array.prototype.demo = function(num1,num2) {
  return num1 + num2;
};

var arr = [];

console.log(arr.demo(4,2));
