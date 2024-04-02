function calc(num) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if(num == "+") {result = num1 + num2;} 
    else if(num == "-") {result = num1 - num2;} 
    else if(num == "*") {result = num1 * num2;} 
    else if(num == "/") {result = num1 / num2;}
    document.getElementById("result").innerHTML = result;
}