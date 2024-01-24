
const message = document.getElementById('message')
const gif = document.getElementById('gif')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const container = document.querySelector('.container')

const containerRect = container.getBoundingClientRect()
const noBtnRect = noBtn.getBoundingClientRect()

yesBtn.addEventListener('click', () => {
  gif.src = "https://media.tenor.com/WmUsYN4sEEoAAAAi/milk-and.gif"
  gif.classList.add('w-[26%] ')
  message.innerText = "Yeee.. ab maja ayega na bidoo.."
})

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px"
})