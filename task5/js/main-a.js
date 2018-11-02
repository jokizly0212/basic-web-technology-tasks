let paragraph = document.querySelectorAll('p');
let addBtn = document.querySelector('#add')
let changeBtn = document.querySelector('#change')
let toggleBtn = document.querySelector('#toggle')
var firstParagraph;
var secondParagraph;
var thirdParagraph;

for(let i = 0; i < paragraph.length; i++) {
    firstParagraph = paragraph[0];
    secondParagraph = paragraph[1];
    thirdParagraph = paragraph[2];
}
addBtn.onclick = function () {
    firstParagraph.classList.add('red');
}
changeBtn.onclick = function () {
    secondParagraph.classList.remove('red');
    secondParagraph.classList.add('blue');
}
toggleBtn.onclick = function () {
    thirdParagraph.classList.toggle('green');
}

