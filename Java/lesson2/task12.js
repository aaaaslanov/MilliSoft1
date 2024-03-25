var order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function artma(order) {
    for(var i = 0; i < order.length; i++) {
        for(var j = 0; j < order.length - i - 1; j++) {
            if(order[j] > order[j + 1]) {
                var tmp = order[j];
                order[j] = order[j + 1];
                order[j + 1] = tmp;
            }
        }
    }
    return order;
}
function azalma(order) {
    for(var i = 0; i < order.length; i++) {
        for(var j = 0; j < order.length + i + 1; j++) {
            if(order[j] > order[j - 1]) {
                var tmp = order[j];
                order[j] = order[j - 1];
                order[j - 1] = tmp;
            }
        }
    }
    return order;
}
document.write("Oiginal: " + order + "<br><br>")
document.write("Artma: " + artma(order) + "<br><br>");
document.write("Azalma: " + azalma(order));