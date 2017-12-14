var list = document.querySelector('.list');
var submit = document.querySelector('.submit');
var edit = document.querySelector('.edit');
var del = document.querySelector('.delete');
var complete = document.querySelector('.complete');
var arr = [];
var listCapacity = 1;

submit.addEventListener('click', function(e) {
  e.preventDefault();
  arr.push(document.forms[0].task.value);
  document.forms[0].task.value = '';
  repopulate();
});

edit.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.parentElement);
});

function repopulate() {
//  console.log(listCapacity);
  for(let j = listCapacity - 1; j >= 0; j--){
    let li = document.getElementsByTagName('li');
    let edt = document.querySelectorAll('edit');
    let delt = document.querySelectorAll('delete');
    let comp = document.querySelectorAll('complete');
    list.removeChild(li[j]);
  };
  for(let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.classList.add('h4');
    li.textContent = arr[i];
    let complete = document.createElement('button');
    complete.textContent = "Complete";
    complete.classList.add('pull-right', 'edit');
    let remove = document.createElement('button');
    remove.textContent = "Delete";
    remove.classList.add('pull-right', 'edit');
    let edit = document.createElement('button');
    edit.textContent = "Edit";
    edit.classList.add('pull-right', 'edit');
    list.appendChild(li);
    li.append(edit, remove, complete);
    button = document.querySelectorAll('button');
  };
  listCapacity = arr.length;
}
