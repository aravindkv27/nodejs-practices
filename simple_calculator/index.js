var readline = require('readline-sync')

var operations = ['+','-','*','/'];
var index = null;
// var operator = null;
var firstNumber = 0;
var secondNumber = 0;

// var username = readlineSync.question("May I have your name: ");
// console.log("Hello "+ username + "!");
function opeQuestions(){
    // user response

    var operator = readline.question("Mention the operation you would like to perform?"
    + '\nOptions:'
    + '\nSum ('+ operations[0]+')'
    + '\nSubtraction ('+ operations[1]+')'
    + '\nMultiplication ('+ operations[2]+')'
    + '\nDivision ('+ operations[3]+') : ' 
    );

    if (!operations.includes(operator)) {
        console.log("Invalid Operation");
        opeQuestions();
    }

    firstNumber = readline.questionInt("Enter the first number: ");
    secondNumber = readline.questionInt("Enter the second number: ")

    var add = firstNumber + secondNumber;
    var sub = firstNumber - secondNumber;
    var Multiplication = firstNumber * secondNumber;
    var Division = firstNumber / secondNumber;

    switch(operator) {
        case '+':
            console.log("The result of "+firstNumber +operator+ secondNumber+ '=' +add);
            break;
        case '-':
            console.log("The result of "+firstNumber +operator+ secondNumber+ '=' +sub);
            break;
        case '*':
            console.log("The result of "+firstNumber +operator+ secondNumber+ '=' +Multiplication);
            break;
        case '/':
            console.log("The result of "+firstNumber +operator+ secondNumber+ '=' +Division.toFixed(2));
            break;
        default:
            console.log("Something went Wrong");
    }
}

opeQuestions();