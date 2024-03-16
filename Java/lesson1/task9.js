var zero = 0
count = 0
for(var i = 100; i <= 999; i++) {
    count++ 
    var orta = (zero += i) / count
}
document.write("ədədi ortası: " + orta);