console.log("testing...");

setInterval(() => {
    const time = new Date
    let showTime = document.querySelector('.showTime');
    showTime.innerHTML = `<h1> ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}</h1>`
}, 1000)


// let startTimeBtn = document.getElementById('startTime')
// startTimeBtn.addEventListener('click', ()=>{
//     setInterval(()=>{
//         var time = new Date
//         let showFastTime = document.querySelector('.showFastTime');
//         showFastTime.innerHTML = `<h2>${time.getSeconds()}s ${Math.floor(time.getMilliseconds()/10)}</h2>`
//     },1)
// })

function isNegative(num) {
    if (Math.sign(num) === -1) {
        return true;
    }

    return false;
}

var x = document.getElementById("myAudio");
let userTime = document.getElementById('userTime')
let alarmTimeBtn = document.querySelector('.alarmTimeBtn')
let setAlarmBtn = document.getElementById('setAlarmBtn')

setAlarmBtn.addEventListener('click', () => {
    let count = 0
    if (count == userTime.value) {
        x.play();

        alarmTimeBtn.innerHTML = `<button id="stopAlarmBtn">Stop Alarm</button>`
        let stopAlarmBtn = document.getElementById('stopAlarmBtn')
        stopAlarmBtn.addEventListener('click', () => {
            x.pause()
        })
    }
    else {
        if (userTime.value<=0) {
            alert('you cannot write negative number')
            userTime.value = '';
        }
        else {
            console.log('alram set ho gaya')
            setInterval(() => {
                count++
                if (count == userTime.value) {
                    x.play();
                    alarmTimeBtn.innerHTML = `<button id="stopAlarmBtn">Stop Alarm</button>`
                    let stopAlarmBtn = document.getElementById('stopAlarmBtn')
                    stopAlarmBtn.addEventListener('click', () => {
                        x.pause()
                    })
                }
                console.log(count)
            }, 1000)
        }
    }
})

