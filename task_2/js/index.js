//------popup functionality-----
const popup = document.querySelector('.popup');
const popupFunc = () => popup.classList.toggle('d-none');

const sideBar = document.querySelector('.sideBar')
const sideBarFunc = ()=>{
    if("d-none" === sideBar.classList[1]){
        sideBar.style.animation = "moveLeftToRight 1.5s";
    }else{
        sideBar.style.animation = "moveRightToLeft 1.5s"
    }
    sideBar.classList.toggle('d-none');
}


