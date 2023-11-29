console.log("hello hello console check")

const userCommand = document.getElementById('userCommand')
const runBtn = document.getElementById('runBtn')
const showCommands = document.getElementById('showCommands')

runBtn?.addEventListener('click', () => {
    const userCommandValue = (userCommand as HTMLInputElement).value
    console.log(userCommandValue.split(" "));
    const constantsOpration = ["+", "-", "/", "*", "**"];
    userCommandValue.split(" ").map((singleArraysData => {
        console.log(singleArraysData)
    }))
})


while (true) {
    const firstNumber = prompt("Enter the Frist number :");
    const op = prompt("Enter the Oprations, e.g: +, -, *, /, etc ")
    const secondNumber = prompt("Enter the second value: ");

    if (op === "+") {
        alert(Number(firstNumber) + Number(secondNumber))
    }
    else if (op === "-") {
        alert(Number(firstNumber) - Number(secondNumber))
    }
    else if (op === "*") {
        alert(Number(firstNumber) * Number(secondNumber))
    }
    else if (op === "*") {
        alert(Number(firstNumber) / Number(secondNumber))
    }
    else if (op === "**") {
        alert(Number(firstNumber) ** Number(secondNumber))
    } else {
        alert("i think you've entered worng opration")
    }

    const askRepeat = prompt("press C for continue and X for not")
    if (askRepeat === "x" || askRepeat === "X" || firstNumber === "X" || firstNumber === "x" || secondNumber === "X" || secondNumber === "x" || op === "X" || op === "x") break
    if (askRepeat === "c" || askRepeat === "C") continue

}

