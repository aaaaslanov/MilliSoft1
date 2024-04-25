let input = document.querySelectorAll('input');
let all = document.querySelector('#all');
let card = document.querySelectorAll('.card');
let cards = document.querySelector('#cards');
function filter() {
    card.forEach((card) => {
        if(card.classList.contains(this.id)) {
            card.style.display = 'flex';
            cards.style.gap = '100px';
        } 
        else {card.style.display = 'none';}
    });
}
input.forEach((input) => {input.addEventListener('click', filter);})
all.addEventListener('click', () => {card.forEach((card) => {card.style.display = 'flex';});});