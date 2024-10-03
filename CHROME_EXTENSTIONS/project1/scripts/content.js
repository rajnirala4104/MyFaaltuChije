chrome.runtime.onMessage.addListener((message, sender) => {
   if (message.from === "popup" && message.message === "startTimer") {
      let confirmation = confirm("Do you want to block this site?");
      if (confirmation) {
         let div = document.createElement("div");
         div.setAttribute("id", "timerContainer");
         div.innerHTML = `<div class="w-full h-full flex justify-center items-center w-full h-[10rem] bg-black text-white position-absolute top-0 z-10">
               <span>
                  00:00:00
               </span>
         </div>`;

         document.body.appendChild(div);

         setTimeout(() => {
            document.getElementById("timer").remove();
         }, 5000);
      }
   }
});
