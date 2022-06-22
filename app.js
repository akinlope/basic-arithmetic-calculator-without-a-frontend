console.log("this is connected ");

let firstNumber = parseFloat(prompt("Enter FirstNumber"))
let secondNumber = parseFloat(prompt("Enter SecondNumber"))
let operation = prompt("Enter operation:  *, +, -, /,")

// if(operation == "*"){
//     alert(firstNumber * secondNumber)
// }else if(operation == "+"){
//     alert(firstNumber + secondNumber)
// }else if(operation == "-"){
//     alert(firstNumber - secondNumber)
// }else if(operation == "/"){
//     alert(firstNumber / secondNumber)
// }

switch (operation){
    case "*":
        alert(firstNumber * secondNumber)
        break;
    case "+":
        alert(firstNumber + secondNumber)
        break;
    case "-":
        alert(firstNumber - secondNumber)
        break;
    case "/":
        alert(firstNumber / secondNumber)
        break;
}