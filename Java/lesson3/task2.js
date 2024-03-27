var arr = [1, 2, 3, 4, 5, 10, 11, 12, 15, 20, 25, 30];
var arr1 = [];
for(var i = 0; i < arr.length; i++) {
    if(arr[i].toString().slice(-1) == 5 || arr[i].toString().slice(-1) == 0) {
        arr1.push(arr[i]);
    }
}
document.write("Original array: " + arr + "<br><br>")
document.write("5-ə bölünən ədədlərin sayı: " + arr1.length + "<br><br>")
document.write("5-ə bölünən ədədlər: " + arr1)