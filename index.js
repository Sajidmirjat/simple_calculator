#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter first number: ",
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter second number: ",
    },
    {
        name: "operator",
        type: "list",
        message: "Select one of the operator from listed below to perform operation.",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Exponentiation",
            "Percentage"
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log("Sum of two numbers is: ", answer.firstNumber + answer.secondNumber);
}
if (answer.operator === "Subtraction") {
    console.log("Value after Subtraction is: ", answer.firstNumber - answer.secondNumber);
}
if (answer.operator === "Division") {
    console.log("Value after division is: ", answer.firstNumber / answer.secondNumber);
}
if (answer.operator === "Exponentiation") {
    console.log("Exponent of two numbers is: ", answer.firstNumber ** answer.secondNumber);
}
if (answer.operator === "Multiplication") {
    console.log("Value after multiplying : ", answer.firstNumber * answer.secondNumber);
}
if (answer.operator === "Percentage" && answer.firstNumber <= answer.secondNumber) {
    console.log("Percentage of two numbers is: ", (answer.firstNumber / answer.secondNumber) * 100);
}
else if (answer.operator === "Percentage" && answer.firstNumber > answer.secondNumber) {
    console.log("You entered an invalid number, please check and re enter a valid number.");
}
