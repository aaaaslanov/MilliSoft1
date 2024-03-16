var sade = "";
var murekkeb = "";
for(var i = 2; i <= 100; i++) {
    var bolen = 0;
    for(var j = 1; j <= i; j++) {if(i % j == 0) {bolen++;}}
    if(bolen == 2) {sade += i + "<br/>";} 
    else {murekkeb += i + "<br/>";}
}
document.write("Sadə:<br/>", sade, "<br>");
document.write("Mürəkkəb:<br/>", murekkeb);