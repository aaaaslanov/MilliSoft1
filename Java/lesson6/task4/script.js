let image = document.querySelectorAll(".image");
let images = document.querySelectorAll(".image img");
image.forEach((image, index) => {
    image.addEventListener("click", () => {
        let modal_container = document.createElement('div');
        modal_container.setAttribute('id', 'modal-container');
        document.body.appendChild(modal_container);
        modal_container.addEventListener("click", () => {modal_container.style.display = "none";})
        let modal = document.createElement('div');
        modal.setAttribute('class', 'modal');
        modal_container.appendChild(modal);
        let modal_img = document.createElement('img');
        modal_img.setAttribute('src', images[index].src);
        modal.appendChild(modal_img);
        let title = document.createElement('h3');
        let title_text = document.createTextNode(images[index].alt);
        title.appendChild(title_text);
        modal.appendChild(title);
        let close = document.createElement('span');
        close.setAttribute('class', 'close');
        let close_icon = document.createTextNode("X");
        close.appendChild(close_icon); modal.appendChild(close);
        close.addEventListener('click', () => {modal_container.style.display = "none";})
        modal_container.style.display = "flex";
    });
});