var zero = 0; var say;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write("Original array: " + arr + "<br><br>")
for(var i = 0; i < arr.length; i++) {zero += arr[i]; say = arr[i]++}
document.write("Array cəmi:" + zero + "<br><br>")
document.write("Array ədəd sayi: " + say + "<br><br>")
document.write("Array ədədi ortası: " + zero / say)