var arr = [10, 14, 15, 19, 20];
function movePositions(arr) {
    let min = arr[0]; let max = arr[0];
    let minIndex = 0; let maxIndex = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= min) {min = arr[i];minIndex = i;}
        if(arr[i] >= max) { max = arr[i]; maxIndex = i;}
    }
    arr[maxIndex] = min; arr[minIndex] = max;
    return arr;
}
document.write("Original array: " + arr + "<br><br>")
document.write("ən böyük və ən kiçik elementlərin yerini dəyişilib: " + movePositions(arr));