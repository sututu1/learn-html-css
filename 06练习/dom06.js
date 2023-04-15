//DOM Manipulation
//const title =document.querySelector('#main-heading');
//title.style.color = 'red';
/* listItems = document.querySelectorAll('list-items');
for (i = 0; i < listItems.length; i++){
   listItems[i].style.fontSize = '5em';
}*/

/*const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);

li.innerText = 'X-men'
li.setAttribute('id','main-heading');*/

/*let ul = document.querySelector('ul');
console.log(ul.parentNode.pqrentNode);
console.log(ul.parentElement.parentElement);*/

let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[3].style.backgroundColor = 'yellow';

ul.childNodes[3].style.fontSize = '2rem';
const d = [4,3,9,5,6];
for (i=0 ; i<d.length ; i++){
   console.log(d[4]);
}








//GetElementById()
//const title = document.getElementById('main-heading')
//console.log(title);
//GetElementByClassName()
//const listItems = document.getElementsByClassName('list-items');
//console.log(listItems);
//getElementsByTagName()
//const listItems = document.getElementsByTagName('li');
//console.log(listItems);
//querySelector()
//const container = document.querySelector('div');
//console.log(container);
//querySelectorAll()
//const container = document.querySelectorAll('div');
//console.log(container);