document.write("Daxilində təkliyi 1 olan ədədlər: ") 
for(var i = 0; i < 100; i++) {
    if(i.toString().slice(-1) == 1) {document.write(i + " ");}
}