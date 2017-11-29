var title = prompt('Give this website a title');
const h1 = document.createElement('h1');
h1.textContent = title;
h1.classList.add('text-center');

const body = document.querySelector('body');
body.appendChild(h1);

var sentences = prompt('Write a few sentences describing what you did today');
const p = document.createElement('p');
p.textContent = sentences;
p.classList.add('text-justify');
h1.appendChild(p);

var backColor = prompt('Type in your favorite color from the list:\nred, green, blue, yellow, orange, purple, pink, black, gray, white');
while(backColor != 'red' && backColor != 'green' && backColor != 'blue' && backColor != 'yellow' && backColor != 'orange' && backColor != 'purple' && backColor != 'pink' && backColor != 'black' && backColor != 'gray' && backColor != 'white'){
  backColor = prompt('Your input was not recognized please select againg:\nred, green, blue, yellow, orange, purple, pink, black, gray, white');
}
p.style.backgroundColor = backColor;
