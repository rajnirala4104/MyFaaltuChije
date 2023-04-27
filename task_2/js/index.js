//------popup functionality-----
const popup = document.querySelector('.popup');
const popupFunc = () => {
    if("d-none" in sideBar.classList){
        popup.classList.toggle('d-none');
    }
    else{
        sideBar.classList.toggle('d-none');
        popup.classList.toggle('d-none')
    }
}

const sideBar = document.querySelector('.sideBar')
const sideBarFunc = ()=>{
    if("d-none" === sideBar.classList[1]){
        sideBar.style.animation = "moveLeftToRight 2s"
        sideBar.classList.toggle('d-none');
    }else{
        sideBar.style.animation = "moveRightToLeft 2s"
        sideBar.classList.toggle('d-none');
    }

}


