var arr1 = [10, 15];
var arr2 = [1, 2];
function vur(arr1, arr2) {
    var hasil = [];
    for(var i = 0; i < arr1.length; i++) {hasil.push(arr1[i] * arr2[i]);}
    return hasil;
}
document.write("Original array1: " + arr1 + "<br><br>")
document.write("Original array2: " + arr2 + "<br><br>")
document.write("eyni yerdə duran elementlərinin hasilindən ibarət yeni array: " + vur(arr1, arr2));