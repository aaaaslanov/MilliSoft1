var num = Number(prompt('Ədəd daxil edin:'));
function polindrom(num) {
    var str = num.toString(); var len = str.length;
    var orta = Math.floor(len / 2);
    for(var i = 0; i < orta; i++) {
        if(str[i] != str[len - 1 - i]) {return alert('Bu ədəd polindrom deyil.');} 
        else {return alert('Bu ədəd polindromdur.');}
    }
}
polindrom(num)