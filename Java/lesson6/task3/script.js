let add = document.querySelector("#add");
let input = document.querySelector("input");
let to_do = document.querySelector("#to_do");
let doing = document.querySelector("#doing");
let done = document.querySelector("#done");
let to_do_to_doing = document.querySelector("#to_do_to_doing");
let doing_to_to_do = document.querySelector("#doing_to_to_do");
let doing_to_done = document.querySelector("#doing_to_done");
let done_to_doing = document.querySelector("#done_to_doing");
add.addEventListener("click", function() {
    if(input.value.length > 0) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(input.value));
        to_do.appendChild(option);
    }
})
to_do_to_doing.addEventListener('click', function() {
    let selected = Array.from(to_do.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        doing.appendChild(option); selected[i].remove();
    }
})
doing_to_to_do.addEventListener('click', function() {
    let selected = Array.from(doing.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        to_do.appendChild(option); selected[i].remove();
    }
})
doing_to_done.addEventListener('click', function() {
    let selected = Array.from(doing.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        done.appendChild(option); selected[i].remove();
    }
})
done_to_doing.addEventListener('click', function() {
    let selected = Array.from(done.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        doing.appendChild(option); selected[i].remove();
    }
})