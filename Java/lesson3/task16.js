var text = prompt('1-ci sözü daxil edin:');
var vowel = 0;
text = text.toLowerCase();
document.write("Original word: " + text + "<br><br>")
for(var i = 0; i < text.length; i++) {
    if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {vowel++;}
}
var vowelCount = text.match(/[aeiou]/gi).length;
var consonantCount = text.match(/[qwrtypsdfghjklzxcvbnm]/gi).length;
document.write("Saitlər:" + vowelCount +"<br><br>");
document.write("Samitlər:" + consonantCount + "<br><br>");