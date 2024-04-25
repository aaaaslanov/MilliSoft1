let ul = document.getElementsByTagName('ul')[0];
let page = 1; let limit = 10;
let next = document.getElementById('next'); let current = 1;
let pages = document.getElementById('pages');
let previous = document.getElementById('previous');
for(let i = 1; i <= 50; i++) {
    let li = document.createElement('li');
    let li_text = document.createTextNode('Item ' + i);
    li.appendChild(li_text); ul.appendChild(li); li.style.fontSize = "2rem";
}
let data = document.querySelectorAll('li');
let count_pages = Math.ceil(data.length / limit);
function disable_button(button) {button.style.cursor = "not-allowed"; button.setAttribute("disabled", true);}
function enable_button(button) {button.style.cursor = "pointer"; button.removeAttribute("disabled");}
function current_page(page_num) {
    current = page_num;
    document.querySelectorAll(".page").forEach((a) => {
        a.classList.remove("active");
        let page_index = Number(a.getAttribute("page-index"));
        if(page_index === current) {a.classList.add("active");}
    });
    if(current === 1) {disable_button(previous);} 
    else {enable_button(previous);}
    if(count_pages === current) {disable_button(next);} 
    else {enable_button(next);}
    let range_previous = (page_num - 1) * limit;
    let range_current = page_num * limit;
    data.forEach((item, index) => {
        item.style.display = "none";
        if(index >= range_previous && index < range_current) {item.style.display = "list-item";}
    });
}
window.addEventListener("load", () => {
    for(let i = 1; i <= count_pages; i++) {
        let page_num = document.createElement("a"); page_num.className = "page";
        let page_num_text = document.createTextNode(i);
        page_num.appendChild(page_num_text); page_num.setAttribute("page-index", i);
        pages.appendChild(page_num);
    }
    current_page(1);
    previous.addEventListener("click", () => {current_page(current - 1);});
    next.addEventListener("click", () => {current_page(current + 1);});
    document.querySelectorAll(".page").forEach((a) => {
        let page_index = Number(a.getAttribute("page-index"));
        if(page_index) {a.addEventListener("click", () => {current_page(page_index);});}
    });
});