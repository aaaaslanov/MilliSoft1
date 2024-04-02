let currentWidth = document.querySelector('div').offsetWidth;
let currentHeight = document.querySelector('div').offsetHeight;
let currenBorderWidth = parseFloat(getComputedStyle(document.querySelector('div')).getPropertyValue('border-width'));
function changeSize() {
    let width = document.getElementById('width').value;
    document.querySelector('div').style.width = currentWidth + +width + 'px';
    let height = document.getElementById('height').value;
    document.querySelector('div').style.height = currentHeight + +height + 'px';
    let borderWidth = parseFloat(document.getElementById('borderWidth').value);
    document.querySelector('div').style.borderWidth = currenBorderWidth + borderWidth + 'px';
}