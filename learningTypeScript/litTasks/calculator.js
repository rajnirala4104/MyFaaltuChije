console.log("hello hello console check");
var userCommand = document.getElementById('userCommand');
var runBtn = document.getElementById('runBtn');
var showCommands = document.getElementById('showCommands');
runBtn === null || runBtn === void 0 ? void 0 : runBtn.addEventListener('click', function () {
    var userCommandValue = userCommand.value;
    console.log(userCommandValue.split(" "));
    var constantOprations = ["+", "-", "/", "*", "**"];
    userCommandValue.split(" ").forEach((function (singleArraysData) {
        console.log(constantOprations.includes(singleArraysData));
        // console.log(Number(singleArraysData))
    }));
});
