console.log("hello everyone how're you...?");

// 1) 
let titleElm = document.getElementById('title');
titleElm.innerText = "Hello DOM"


// 2)
let allTheP = document.getElementsByTagName('p'); // this will return HTMLCollection that seems like an array but it is not.

// solution - 1
// for (let i = 0; i < allTheP.length; i++) {
//     const element = allTheP[i];
//     element.style.padding = "5px"
//     element.style.background = "yellow"
// }

// solution - 2
Array.from(allTheP).forEach(elem => {
    elem.style.padding = "5px"
    elem.style.background = "yellow"
})

// 3) 
let ulElem = document.querySelector("#itemList");
let newListItem = document.createElement('li');
newListItem.innerText = "New Item"

ulElem.appendChild(newListItem)

// 4)
let firstDiv = document.querySelector('div');
firstDiv.remove();


// 5)
let inputField = document.getElementById('username');
let showName = document.getElementById('displayName');
let btn = document.getElementById('showUsernameBtn');

btn.addEventListener('click', () => {
    showName.innerText = inputField.value;
    inputField.value = "";
})


// 6) 
let sampleImg = document.getElementById('mainImage');
let changeSampleImageBtn = document.getElementById('changeImgBtn');
changeSampleImageBtn.addEventListener('click', () => {
    sampleImg.attributes.src = ""
})

