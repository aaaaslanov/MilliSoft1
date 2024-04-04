let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");
let modal5 = document.getElementById("modal5");
let modal6 = document.getElementById("modal6");
let modal1Btn = document.getElementById("modal1Btn");
let modal2Btn = document.getElementById("modal2Btn");
let modal3Btn = document.getElementById("modal3Btn");
let modal4Btn = document.getElementById("modal4Btn");
let modal5Btn = document.getElementById("modal5Btn");
let modal6Btn = document.getElementById("modal6Btn");
let body = document.querySelector("body");
modal1Btn.addEventListener("click", () => {modal1.style.display = "flex"; body.style.overflow = "hidden";});
modal2Btn.addEventListener("click", () => {modal2.style.display = "flex"; body.style.overflow = "hidden";});
modal3Btn.addEventListener("click", () => {modal3.style.display = "flex"; body.style.overflow = "hidden";});
modal4Btn.addEventListener("click", () => {modal4.style.display = "flex"; body.style.overflow = "hidden";});
modal5Btn.addEventListener("click", () => {modal5.style.display = "flex"; body.style.overflow = "hidden";});
modal6Btn.addEventListener("click", () => {modal6.style.display = "flex"; body.style.overflow = "hidden";})
window.onclick = function(event) {
    if(event.target == modal1) {modal1.style.display = "none"; body.style.overflow = "visible";} 
    else if(event.target == modal2) {modal2.style.display = "none"; body.style.overflow = "visible";} 
    else if(event.target == modal3) {modal3.style.display = "none"; body.style.overflow = "visible";} 
    else if(event.target == modal4) {modal4.style.display = "none"; body.style.overflow = "visible";} 
    else if(event.target == modal5) {modal5.style.display = "none"; body.style.overflow = "visible";} 
    else if(event.target == modal6) {modal6.style.display = "none";body.style.overflow = "visible";}
}