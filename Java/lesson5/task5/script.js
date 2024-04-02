function insert(value) {document.querySelector('input').value += value;}
function equal() {document.querySelector('input').value = eval(document.querySelector('input').value);}
function clean() {document.querySelector('input').value = '';}
function backspace() {document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);}