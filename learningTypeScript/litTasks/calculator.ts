console.log("hello hello console check")

const userCommand = document.getElementById('userCommand')
const runBtn = document.getElementById('runBtn')
const showCommands = document.getElementById('showCommands')

runBtn?.addEventListener('click', () => {
    const userCommandValue = (userCommand as HTMLInputElement).value
    console.log(userCommandValue.split(" "));
    const constantOprations = ["+", "-", "/", "*", "**"];
    userCommandValue.split(" ").forEach((singleArraysData => {
        console.log(constantOprations.includes(singleArraysData))
        // console.log(Number(singleArraysData))
    }))
})