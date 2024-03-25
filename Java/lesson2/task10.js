var text = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. ab, accusamus. lorem ipsum dolor sit amet,';
function capitalize(text) {
    var arr = text.split(". ");
    for(var i = 0; i < arr.length; i++) {arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);}
    return arr.join(". ");
}
document.write("Original sentence: " + text +  "<br><br>")
document.write("Cümlənin ilk sözündə olan baş hərfin böyük yazılması: <br>" + capitalize(text));