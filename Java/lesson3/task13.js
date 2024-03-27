var text = "Hello my beautiful world !"
function saitSil(text) {return text.replace(/[aeiou]/gi, '');}
document.write("Original mətn" + text + "<br><br>")
document.write("Mətndə saitləri silinib: " + saitSil(text))