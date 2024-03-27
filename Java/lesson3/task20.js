var arr = [1, 2, 3, 4, 5];
var arr1 = [];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] != 4) {arr1.push(arr[i]);}
}
document.write("Original array: " + arr + "<br><br>")
document.write("IndexOf array: " + arr1);