var a = [1, 2, 3, 4, 5, 6]
var b = [1, 2, 3, 4, 5]
function compareArrays(a, b) {
    if(a.length !== b.length) {return "Element sayları fərqlidir."}
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {return "Elementlər fərqlidir."}
    }
    return "Array-lər bərabərdir."
}
document.write(compareArrays(a, b))