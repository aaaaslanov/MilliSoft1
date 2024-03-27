var num = Number(prompt("Ədəd daxil edin: "));
var sade = ""; var murekkeb = "";
for(var i = 2; i <= num; i++) {
    var bolen = 0;
    for(var j = 1; j <= i; j++) {if(i % j == 0) {bolen++;}}
}
if(bolen == 2) {alert(num + " sadədir.");} 
else {alert(num + " mürəkkəbdir.");}