function changeStyle() {
    let div = document.querySelector('div');
    div.style.width = document.getElementById('width').value + 'px';
    div.style.height = document.getElementById('height').value + 'px';
    div.style.borderWidth = document.getElementById('borderWidth').value + 'px';
    div.style.borderStyle = document.getElementById('borderStyle').value;
    div.style.borderColor = document.getElementById('borderColor').value;
    div.style.backgroundColor = document.getElementById('backgroundColor').value;
}