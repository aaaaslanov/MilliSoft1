var num = 123
var num1 = num.toString().split('').join('')
document.write("Rəqəmlər: "); document.write(num)
document.write("<br><br> Rəqəmlərin cəmi: ")
document.write(Number(num1[0]) + Number(num1[1]) + Number(num1[2]))