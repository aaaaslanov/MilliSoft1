let t_body = document.querySelector('tbody');
let thead = document.querySelector('thead');
let close = document.querySelector('#close');
let modal_btn = document.querySelector('#modal-buttons');
let modal = document.querySelector('#modal');
for(let i = 0; i <= 10; i++) {
    let color = i <= 4 ? "red" : i <= 7 ? "yellow" : "green";
    modal_btn.innerHTML += `<button class="modal-button ${color}" onclick="changeGrade(${i})">${i}</button>`;
}
modal_btn.innerHTML += `<button class="modal-button blue" onclick="changeGrade('b.')">b.</button>
<button class="th-button blue" onclick="changeGrade('i/e')">i/e</button>
<button class="th-button red" onclick="changeGrade('q/b')">q/b</button>`;
let people = ['Mike', 'Lipa', 'ALex', 'Kate', 'Michael'];
let table_head = `<tr>`;
for(let i = 0; i < 3; i++) {table_head += `<th class="${i}"><button class="blue ieqb" onclick="allIe(${i})">i/e</button></th>`}
table_head += `</tr><tr>`;
for(let i = 0; i < 3; i++) {table_head += `<th class="${i}"><button class="red ieqb" onclick="allQb(${i})">q/b</button></th>`;}
table_head += `</tr>`;
thead.innerHTML += table_head;
people.forEach((person, index) => {
    let tableRow = `<tr>
    <td>${index + 1}</td> <td>${person}</td>`;
    for(let i = 0; i < 3; i++) {
        tableRow += `<td class="${i}"><button class="td-button de" onClick="openModal(${index}, ${i})">d/e</button></td>`;
    }
    tableRow += `</tr>`; t_body.innerHTML += tableRow;
});
function open_modal(index, cell) {modal.className = index; modal.setAttribute('cell', cell); modal.style.display = 'flex';}
function change_grade(i) {
    let tr = document.querySelectorAll('tbody tr')[modal.className];
    let grade_btn = tr.querySelectorAll('.td-button')[modal.getAttribute('cell')];
    let color = i <= 4 ? 'red' : i <= 7 ? 'yellow' : 'green';
    if(i === 'b.' || i === 'i/e') {color = 'blue';} 
    else if(i === 'q/b') {color = 'red';}
    grade_btn.className = `td-button ${color}`;
    grade_btn.textContent = i; grade_btn.disabled = true; grade_btn.removeAttribute('onClick');
    modal.style.display = 'none';
}
close.addEventListener('click', () => {modal.style.display = 'none';})
function allIe(index) {
    let td_btn = document.querySelectorAll('.td-button'); td_btn.forEach((tdButton, i) => {
        if(tdButton.parentElement.className == index) {
            if(tdButton.className == 'td-button de') {
                tdButton.className = 'td-button blue';
                tdButton.textContent = 'i/e'; tdButton.disabled = true;
                tdButton.removeAttribute('onClick');
            }
        }
    })
}
function all_nb(index) {
    let td_btn = document.querySelectorAll('.td-button');
    td_btn.forEach((tdButton, i) => {
        if(tdButton.parentElement.className == index) {
            if(tdButton.className == 'td-button de') {
                tdButton.className = 'td-button red';
                tdButton.textContent = 'q/b'; tdButton.disabled = true;
                tdButton.removeAttribute('onClick');
            }
        }
    })
}