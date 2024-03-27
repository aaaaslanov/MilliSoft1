var number = Number(prompt('Ədəd daxil edin: '))
var sum = 0;
var numStr = number.toString();
for(var i = 0; i < numStr.length; i++) {sum += parseInt(numStr.charAt(i));}
alert("Ixtiyari ədədin rəqəmləri cəmi: " + sum)