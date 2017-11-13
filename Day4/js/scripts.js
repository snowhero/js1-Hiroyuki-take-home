var toDoArray = [];
var first = [], second = [], third = [];

while (first[0] == null) {
  first[0] = prompt('Type in your first task to do by the end of this week');
}
while (second[0] == null) {
  second[0] = prompt('Type in your second task to do by the end of this week');
}
while (third[0] == null) {
  third[0] = prompt('Type in your third task to do by the end of this week');
}
toDoArray.splice(0, 0, first, second, third);

for (let i = 0; i < toDoArray.length; i++)  {
  toDoArray[i][1] = prompt('How many days will it take to complete "' + toDoArray[i][0] +'"?', '1');
  if (isNaN(toDoArray[i][1])) {
    while (isNaN(toDoArray[i][1])) {
      toDoArray[i][1] = prompt('Please type in an actual number of how many days will it take to complete "' + toDoArray[i][0] +'".', '1');
    }
  }
}

var longestDayCount = toDoArray[0][1];
var longestTask = [];
longestTask[0] = toDoArray[0][0];

let n = 0;
let i = 1;
while (i < toDoArray.length)  {
  if (longestDayCount < toDoArray[i][1]) {
    n = 0;
    longestDayCount = toDoArray[i][1];
    longestTask = [];
    longestTask[n] = toDoArray[i][0];
  } else if (longestDayCount == toDoArray[i][1]) {
    n++;
    longestTask[n] = toDoArray[i][0];
  } else {

  }
  i++;
}

console.log('Your longest to do task(s): ' + longestTask + '\nIt will take ' + longestDayCount + ' day(s) to finish');

for (let i = 0; i < toDoArray.length; i++)  {
  if (longestDayCount != toDoArray[i][1]) {
    toDoArray[i][2] = 'Done';
  }
  else {
    continue;
  }
}

for (let i = 0; i < toDoArray.length; i++)  {
  if ('Done'== toDoArray[i][2]) {
    alert(toDoArray[i][0] + ' is done');
  }
  else {
    continue;
  }
}
