var arr = [1, 2, 3, 4, 3, 5, 5, 6, 6, 7]
function unique(arr) {
    let unique = [];
    for(i = 0; i < arr.length; i++) {
        if(unique.indexOf(arr[i]) === -1) {unique.push(arr[i]);}
    }
    return unique;
}
document.write("Original array: " + arr + "<br><br>")
document.write("Təkrarlanan elementlər silinib: " + unique(arr))