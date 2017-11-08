var name = prompt('Hello, what can I call you by?');
var color = prompt('Select 1 favorite color from the list below and type it in as shown:\nred, orange, yellow, green, blue, pink, purple, black, white, and grey');

switch (color) {
  case 'red':
    alert(name + ' is brave and fearless.');
    break;

  case 'orange':
    alert(name + ' is sweat and energetic.');
    break;

  case 'yellow':
    alert(name + ' is funny and joyous.');
    break;

  case 'green':
    alert(name + ' is calm and intelligent.');
    break;

  case 'blue':
    alert(name + ' is bold with pride and integrity.');
    break;

  case 'pink':
    alert(name + ' is sexy and you know it!');
    break;

  case 'purple':
    alert(name + ' is a gangster!');
    break;

  case 'white':
    alert(name + ' is shy yet empressive.');
    break;

  case 'black':
    alert(name + " must be a Raider's fan...Boo!!!");
    break;

  case 'grey':
    alert(name + ' is cool and laid-back.');
    break;
  default:
    alert('Too bad!!! You did not follow instructions correctly.');
}
