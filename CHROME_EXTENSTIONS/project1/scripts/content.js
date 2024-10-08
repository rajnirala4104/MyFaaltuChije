const sendMessageToBackgroundJs = (message) => {
   chrome.runtime.sendMessage(message);
};

chrome.runtime.onMessage.addListener((message) => {
   console.log(message.from, message.message);
   console.log(message.from === "popup" && message.message === "startTimer");
   if (message.from === "popup" && message.message === "startTimer") {
      let confirmation = confirm("Do you want to block this site?");
      if (confirmation) {
         var hour = 0;
         var minute = 0;
         var second = 5;
         let div = document.createElement("div");
         div.setAttribute("id", "timerContainer");
         div.innerHTML = `
         <div class="timerContainer">
            <div class="timerBox">
               <div class="timer">
                  <span>${("0" + hour).slice(-2)}</span>
                  :
                  <span>${("0" + minute).slice(-2)}</span>
                  :
                  <span>${("0" + second).slice(-2)}</span>
               </div>
            </div>
         </div>`;

         document.body.prepend(div);

         setInterval(() => {
            if (second >= 1) {
               second = second - 1;
            } else {
               sendMessageToBackgroundJs({ closeTab: true });
            }
         }, 1000);
      }
   }
});
