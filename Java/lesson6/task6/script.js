let lower = document.querySelector("#lower");
let higher = document.querySelector("#higher");
let input = document.querySelector("input");
let volume = document.querySelector("h3");
function updateValue() {
    let value = (input.value - input.min) / (input.max - input.min) * 100;
    input.style.background = 'linear-gradient(to right, #FFBE13 0%, #FFBE13 ' + value + '%, #fff ' + value + '%, white' +' 100%)';
    if(input.value != 0) {volume.innerText = input.value + '%';}
}
input.oninput = updateValue;
lower.onclick = function() {if(input.value >= 0) {input.value--; updateValue();}};
higher.onclick = function() {if(input.value < 100) {input.value++;updateValue();}};