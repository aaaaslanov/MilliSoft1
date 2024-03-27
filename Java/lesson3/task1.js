var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function tek(arr) {
    var tekArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(i % 2 != 0) {tekArr.push(arr[i]);}
    }
    return tekArr;
}
document.write("Original array: " + arr + "<br><br>")
document.write("Tək yerdə duran elementlər: " + tek(arr));