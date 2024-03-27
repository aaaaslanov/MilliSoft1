var word1 = prompt('1-ci sözü daxil edin:');
var word2 = prompt('2-ci sözu daxil edin:');
function anagram(word1, word2) {
    if(word1.length !== word2.length) {return false;}
    return word1.split('').sort().join('') === word2.split('').sort().join('');
}
anagram(word1, word2);
if(anagram(word1, word2)) {alert('Sözlər anaqramdır.');} 
else {alert('Sözlər anaqram deyil.');}