var date1 = new Date(2024, 2 , 20);
var date2 = new Date(2024, 2, 28)
var time = date2.getTime() - date1.getTime();
var days = Math.floor(time / (1000 * 60 * 60 * 24));
document.write("20.03.2024 - 28.03.2024 tarix arasındakı gün sayı: " + days)