let add = document.querySelector("#add");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
add.addEventListener("click", function() {
    if(input.value.length > 0) {
        let l = document.createElement("li");
        l.appendChild(document.createTextNode(input.value));
        ul.appendChild(l); l.addEventListener('click', doneItem);
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        let icon = document.createElement("i");
        icon.className = "fas fa-trash";
        deleteButton.appendChild(icon);
        l.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleteItem);
        input.value = "";
    }
})
function deleteItem() {this.parentNode.remove();}
function doneItem() {
    if(this.style.textDecoration != "line-through") {this.style.textDecoration = "line-through";} 
    else {this.style.textDecoration = "none";}
}