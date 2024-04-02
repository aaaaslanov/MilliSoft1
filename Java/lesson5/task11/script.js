function accordion(p) {
    let list = p.nextElementSibling; let icon = p.firstElementChild;
    if(list.style.display === 'none') {
        list.style.display = 'block';
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
    } else {
        list.style.display = 'none';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
    }
    let lists = document.querySelectorAll("ul"); let icons = document.querySelectorAll("p > i");
    for(let i = 0; i < lists.length; i++) {
        if(lists[i] !== list) {
            lists[i].style.display = "none";
            icons[i].classList.remove('fa-chevron-down');
            icons[i].classList.add('fa-chevron-right');
        }
    }
}