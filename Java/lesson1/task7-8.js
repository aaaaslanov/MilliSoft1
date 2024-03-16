for(var i = 100; i <= 999; i++) {
    if(i % 7 == 0 && i % 8 == 0) {
        document.write("Bölünən ilk ədəd: " + i + "<br><br>")
        break
    }
}
for(var j = 999; j >= 100; j--) {
    if(j % 7 == 0 && j % 8 == 0) {
        document.write("Bölünən son ədəd: " + j + "<br>")
        break
    }
}