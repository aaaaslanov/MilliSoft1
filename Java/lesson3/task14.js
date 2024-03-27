var chars = "abcçdeəfgğhıijklmnoöpqrsştuüvwxyzABCÇDEƏFGĞHIJKLMNOÖPQRSŞTUÜVWXYZ0123456789";
var random = "";
var length = prompt("Uzunluğu daxil edin:");
for(var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * chars.length);
    random += chars.charAt(index);
}
alert(random)