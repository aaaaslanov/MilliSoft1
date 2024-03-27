var arr = [5, 10, 15, 20, 25];
var max = arr[0];
var min = arr[0];
for(var i = 0; i < arr.length; i++) {if(arr[i] >= max) {max = arr[i];}}
for(var i = 0; i < arr.length; i++) {if(arr[i] <= min) { min = arr[i];}}
document.write("ən böyük element: " +  max + "<br><br>");
document.write("ən kiçik element: " + min)