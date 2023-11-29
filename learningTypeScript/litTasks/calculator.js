console.log("hello hello console check");
var userCommand = document.getElementById('userCommand');
var runBtn = document.getElementById('runBtn');
var showCommands = document.getElementById('showCommands');
runBtn === null || runBtn === void 0 ? void 0 : runBtn.addEventListener('click', function () {
    var userCommandValue = userCommand.value;
    console.log(userCommandValue.split(" "));
    var constantsOpration = ["+", "-", "/", "*", "**"];
    userCommandValue.split(" ").map((function (singleArraysData) {
        console.log(singleArraysData);
    }));
});
while (true) {
    var firstNumber = prompt("Enter the Frist number :");
    var op = prompt("Enter the Oprations, e.g: +, -, *, /, etc ");
    var secondNumber = prompt("Enter the second value: ");
    var askRepeat = prompt("press C for continue and X for not");
    if (askRepeat === "x" || askRepeat === "X" || firstNumber === "X" || firstNumber === "x" || secondNumber === "X" || secondNumber === "x" || op === "X" || op === "x")
        break;
    if (askRepeat === "c" || askRepeat === "C")
        continue;
    if (op === "+") {
        alert(Number(firstNumber) + Number(secondNumber));
    }
    else if (op === "-") {
        alert(Number(firstNumber) - Number(secondNumber));
    }
    else if (op === "*") {
        alert(Number(firstNumber) * Number(secondNumber));
    }
    else if (op === "*") {
        alert(Number(firstNumber) / Number(secondNumber));
    }
    else if (op === "**") {
        alert(Math.pow(Number(firstNumber), Number(secondNumber)));
    }
    else {
        alert("i think you've entered worng opration");
    }
}
