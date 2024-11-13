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
               <div class="title">
                  <h3 class="text-2xl">
                     <span class="hostname"> ${message.tabUrl} </span>
                     will be 
                     <span class="blocked"> blocked</span> in
                  </h3>
               </div>
               <div class="timer">
                  <span id="hour">${("0" + hour).slice(-2)}</span>
                  :
                  <span id="minute">${("0" + minute).slice(-2)}</span>
                  :
                  <span id="second">${("0" + second).slice(-2)}s</span>
               </div>
            </div>
         </div>`;

         document.body.prepend(div);
         document.body.style.overflow = "hidden";

         setInterval(() => {
            if (second >= 1) {
               second = second - 1;
               document.getElementById("second").innerHTML = `${(
                  "0" + second
               ).slice(-2)}s`;
            } else {
               sendMessageToBackgroundJs({ closeTab: true });
            }
         }, 1000);
      }
   }
});
