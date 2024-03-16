var zero = 0
var one = 1
document.write("Cüt ədədlər: <br>")
for(var i = 1; i < 100; i++) {
    if(i % 2 == 0) {
        zero += i
        one *= i
        document.write(i + "<br>")
    }
}
document.write("<br>Onların cəmi: " + zero + "<br><br>Onların hasili: " + one)