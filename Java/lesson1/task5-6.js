var zero = 0
document.write("Bölünən ədədlər: <br>")
for(var i = 100; i <= 999; i++) {
    if(i % 7 == 0 && i % 8 == 0) {
        document.write(i + "<br>")
        zero += i
    }
}
document.write("<br>Bölünən ədədlərin cəmi: " + zero)