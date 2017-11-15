var number = prompt('Type in a number', '12');
number = square(number);
alert('Your number squared is ' + number);


function square(number) {
  while (isNaN(number) == true) {
    alert('Sorry but your input is not a number');
    number = prompt('Please type in an actual number integer or decimal', '12');
  }
  number = number * number;
  return number;
}

var string = prompt('Type in a word, phrase, or sentence');
string = puncuate(string);
alert('Here is your repuncuated input:\n' + string);

function puncuate(string) {
  if (string == null) {
    string = prompt('Please type something');
  }
  var newString = string.substr(0, 1).toUpperCase() + string.substr(1);
  if (newString.substr(newString.length - 1, 1) != '.') {
    newString = newString + '.';
  }
  return newString;
}

var word = prompt('Type in a word');
word = flip(word);
alert('Tah dah! Your word is funky! ' + word);

function flip(word) {
  if (word == null) {
    word = prompt('Please type a word or something');
  }
  let n = Math.round(word.length/2);
  word = word.substr(n) + word.substr(0, n);
  return word;
}
