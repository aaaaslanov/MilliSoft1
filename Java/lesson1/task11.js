var num = Number(prompt("Ədəd daxil edin"));
document.write("ədədin bölünəni olan bütün 3 rəqəmli ədədlər: <br>")
for(i = 100; i <= 999; i++) {
    if(i % num == 0) {document.write(i + "<br/>");}
}