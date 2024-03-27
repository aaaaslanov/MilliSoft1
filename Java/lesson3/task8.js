var arr = [1, 2, 3, 4, 5, 6, 7];
function showRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
document.write("Original array: " + arr + "<br><br>")
document.write("Ixtiyari ədəd: " + showRandom(arr))
