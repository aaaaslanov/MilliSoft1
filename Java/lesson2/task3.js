var arr = [1, 'a', 'b', 2, 3, 5, 'r', 'c', 'd', 6]
function integer(arr) {
    var arr1 = []
    for(var i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {arr1.push(arr[i])}
    }
    return arr1
}
document.write("Original array: " + arr + "<br><br>")
document.write("ədəd olmayan elementləri silinib: " + integer(arr))