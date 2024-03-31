var date1 = new Date(2024, 2, 30);
var date2 = new Date(2022, 3, 10)
var year = Math.abs(date2.getFullYear() - date1.getFullYear());
var month = Math.abs(date2.getMonth() - date1.getMonth());
var day = Math.abs(date2.getDate() - date1.getDate());
document.write("10.04.2022 - 30.03.2024 qeder kecib: <br><br>")
document.write(year + " il " + month + " ay " + day + " gün ")