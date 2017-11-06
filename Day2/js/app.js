var firstName, lastName, answer, birthday;

firstName = prompt('What is your first name?', 'Hiroyuki');
lastName = prompt('What is your last name?', 'Xiong');
console.log(firstName);
alert('Your last name is ' + lastName);
answer = prompt('What is your birthday', '05/06/1994');

birthday = new Date(answer).toUTCString();  // Convert to array
console.log(birthday);
birthday=birthday.split(' '); // Take out the ' ' array elements
console.log(birthday);
birthday=birthday.slice(0, 4); // Retrieve the array elements 0-4
console.log(birthday);
birthday=birthday.join(' ');  // Join back the array elements with ' ' (spaces)
console.log(birthday);
alert('Your birth date lands on ' + birthday);
