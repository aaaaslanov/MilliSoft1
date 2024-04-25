let edit_name = document.querySelector('input#editName');
let edit_btn = document.querySelector('button#editBtn');
let edit_surname = document.querySelector('input#editSurname');
let edit_age = document.querySelector('input#editAge');
let edit_modal = document.querySelector('div#editModal');
let t_body = document.querySelector('tbody');
let search = document.querySelector('input[type=search]');
let add = document.querySelector('button#add');
let add_btn = document.querySelector('button#addBtn');
let add_modal = document.querySelector('div#addModal');
let close = document.querySelectorAll('button.close');
let people = [
    {name: 'Mike',surname: 'Lee', age: 33},
    {name: 'Cate', surname: 'Pump', age: 22},
    {name: 'Lia',surname: 'Dua', age: 43},
    {name: 'Kate', surname: 'Whinchester', age: 31}
]
function get_data(array) {
    array.forEach((person, index) => {
        t_body.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${person.name}</td>
        <td>${person.surname}</td>
        <td>${person.age}</td>
        <td>
            <button class="edit" onclick="edit(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
        </td>
        <td>
            <button class="remove" onclick="remove(${index})"><i class="fa-solid fa-trash"></i></button>
        </td>
    </tr>`
    })
}
get_data(people)
search.addEventListener('input', (e) => {
    let value = e.target.value; t_body.innerHTML = ''
    let filterPeople = people.filter((person) => {
        return person.name.toLowerCase().includes(value.toLowerCase()) || person.surname.toLowerCase().includes(value.toLowerCase())})
    get_data(filterPeople)
})
if(search.value === '') {t_body.innerHTML = ''; get_data(people)}
add.addEventListener('click', () => {add_modal.style.display = 'flex';})
add_btn.addEventListener('click', () => {
    let name = document.querySelector('#addName');
    let surname = document.querySelector('#addSurname');
    let age = document.querySelector('#addAge');
    people.push({name: name.value, surname: surname.value, age: age.value})
    t_body.innerHTML = ''; get_data(people)
    name.value = ''; surname.value = ''; age.value = ''
    add_modal.style.display = 'none';
})
function remove(index) {
    people.splice(index, 1)
    t_body.innerHTML = ''
    get_data(people)
}
function edit(index) {
    function fill(person) {
        edit_name.value = person.name; edit_surname.value = person.surname; edit_age.value = person.age;
    }
    function update(person, newName, newSurname, newAge) {
        person.name = newName; person.surname = newSurname; person.age = newAge; t_body.innerHTML = '';
        get_data(people);
    }
    edit_modal.style.display = 'flex'; let person = people[index];
    fill(person);
    edit_btn.addEventListener('click', updateHandler, {once: true});
    function updateHandler() {
        let newName = edit_name.value; let newSurname = edit_surname.value; let newAge = edit_age.value;
        update(person, newName, newSurname, newAge);
        edit_name.value = ''; edit_surname.value = ''; edit_age.value = ''; edit_modal.style.display = 'none';
    }
}
close.forEach((btn) => {
    btn.addEventListener('click', () => {add_modal.style.display = 'none'; edit_modal.style.display = 'none';})
})