let websiteUrl;
let webHostname;

// .query({active: true, currentWindow: true})  :- get active tab information in current window
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
   websiteUrl = tabs[0].url;
   webHostname = new URL(websiteUrl).hostname;

   document.getElementById("url").innerHTML = tabs[0].url
      .split("/")
      .splice(0, 3)
      .join("/");
});

/**
 * showError()
 * This function will create a div and append it to the error container which is
 * in the popup.html. This div will have a message about which website you are
 * trying to block. After 3 seconds this div will be removed.
 * @param {string} message - message which will be show in the popup
 * @param {string} hostname - hostname of the website which you are trying to block
 */
const showError = (message, hostname) => {
   let div = document.createElement("div");
   div.setAttribute("id", "ERROR");
   // this is the message which will be show in the popup
   // after click on the block button
   div.innerHTML = `<p class="text-red-600 text-center my-2 bg-red-200 px-2 py-1">${message} 
    <span class="font-mono font-semibold">${hostname}</span>
   </p>`;

   // get the messages container and append the div to it
   document.getElementsByClassName("messages")[0].appendChild(div);

   // after 3 seconds remove the div
   setTimeout(() => {
      document.getElementById("ERROR").remove();
   }, 3000);
};

/**
 * showMessags()
 * This function will create a div and append it to the messages container which is
 * in the popup.html. This div will have a message which will be passed in the
 * argument of this function. After 3 seconds this div will be removed.
 * @param {string} message - message which will be show in the popup
 * @param {string} style - style of the message
 */
const showMessags = (
   message,
   style = "text-green-600 text-center my-2 bg-green-200 px-2 py-1"
) => {
   let div = document.createElement("div");

   div.setAttribute("id", "MESSAGE");
   div.innerHTML = `<p class="${style}">${message}</p>`;

   document.getElementsByClassName("messages")[0].appendChild(div);

   // after 3 seconds remove the div
   setTimeout(() => {
      document.getElementById("MESSAGE").remove();
   }, 3000);
};

document.getElementById("blockBtn").addEventListener("click", () => {
   if (
      websiteUrl.toLowerCase().includes("chrome://") ||
      webHostname.toLowerCase().includes("rajnirala4104.github.io")
   ) {
      showError("You can't block", webHostname);
      return;
   } else {
      // getting the data from chrome storage
      chrome.storage.local.get("BlockedUrls", (result) => {
         if (!result.BlockedUrls) {
            chrome.storage.local.set({
               BlockedUrls: [
                  {
                     status: "Inprogress",
                     hostname: webHostname,
                  },
               ],
            });

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
               chrome.tabs.sendMessage(tabs[0].id, {
                  from: "popup",
                  message: "startTimer",
               });
            });
         } else {
            console.log("else block");
            //  checking if the website is already blocked or not
            if (
               // it returns true if at least one element in the array pass the test implemented by the provided function
               result?.BlockedUrls.some(
                  (item) =>
                     item.hostname === webHostname &&
                     item.status === "Inprogress"
               )
            ) {
               showError("This website will be blocked", webHostname);
               return;
            } else if (
               result?.BlockedUrls.some(
                  (item) =>
                     item.hostname === webHostname && item.status === "Blocked"
               )
            ) {
               showError("Already blocked", webHostname);
               return;
            } else {
               // to store data in chrome storage
               // .storage.local.set(data)
               chrome.storage.local.set({
                  BlockedUrls: [
                     ...result.BlockedUrls,
                     {
                        status: "Inprogress",
                        hostname: webHostname,
                     },
                  ],
               });
               chrome.tabs.query(
                  { active: true, currentWindow: true },
                  (tabs) => {
                     chrome.tabs.sendMessage(tabs[0].id, {
                        from: "popup",
                        message: "startTimer",
                     });
                  }
               );
            }
         }
      });
   }
});

document.getElementById("getLocalDataBtn").addEventListener("click", () => {
   chrome.storage.local.get("BlockedUrls", (data) => {
      console.log(data.BlockedUrls);
   });
   showMessags(
      "check console",
      "text-blue-600 text-center my-2 bg-blue-200 px-2 py-1"
   );
});

document.getElementById("clearLocalDataBtn").addEventListener("click", () => {
   chrome.storage.local.clear();
   showMessags("Cleared All Local Data");
});
