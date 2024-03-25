var arr = [1, 2, 3, 4]
var zero = 0
var one = 1
for(var i = 0; i < arr.length; i++) {
    zero += arr[i]
    one *= arr[i]
}
document.write("Array elementlərinin cəmi: " + zero + "<br><br>")
document.write("Array elementlərinin hasili: " + one)