let header_img = document.querySelector('#header-img img');
let gallery_img = document.getElementsByClassName('gallery-img');
let previous = document.querySelector('#previous');
let next = document.querySelector('#next');
for(let i = 0; i < gallery_img.length; i++) {
    gallery_img[i].addEventListener('click', () => {header_img.src = gallery_img[i].children[0].src;})
    document.addEventListener('DOMContentLoaded', () => {header_img.src = gallery_img[0].children[0].src;})
}
previous.addEventListener('click', () => {
    if(header_img.src === gallery_img[0].children[0].src) {header_img.src = gallery_img[5].children[0].src;} 
    else {
        for(let i = 0; i < gallery_img.length; i++) {
            if(header_img.src === gallery_img[i].children[0].src) {
                header_img.src = gallery_img[i - 1].children[0].src;
            }
        }
    }
})
next.addEventListener('click', () => {
    if(header_img.src === gallery_img[5].children[0].src) {header_img.src = gallery_img[0].children[0].src;} 
    else {
        for(let i = 0; i < gallery_img.length; i++) {
            if(header_img.src === gallery_img[i].children[0].src) {
                header_img.src = gallery_img[i + 1].children[0].src;
                break;
            }
        }
    }
})