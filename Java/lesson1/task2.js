var a = Number(prompt('İlk ədədi daxil edin:'))
var b = Number(prompt('2-ci ədədi daxil edin:'))
var c = Number(prompt('3-cü ədədi daxil edin:'))

if(a > b && a > c) {document.write(a + ' böyükdür.<br><br>');} 
else if(b > a && b > c) {document.write(b + ' böyükdür.<br><br>');} 
else if(c > a && c > b) {document.write(c + ' böyükdür.<br><br>');}

if(a < b && a < c) {document.write(a + ' kiçikdir.<br><br>');}
else if(b < a && b < c) {document.write(b + ' kiçikdir.<br><br>');} 
else if(c < a && c < b) {document.write(c + ' kiçikdir.<br><br>');} 
else {document.write('Ədədlər bərabərdir.<br><br>');}