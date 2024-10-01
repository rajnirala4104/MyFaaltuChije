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
   div.innerHTML = `<p class="text-red-500 text-center my-2">${message} 
    <span class="font-mono font-semibold">${hostname}</span>
   </p>`;

   // get the error container and append the div to it
   document.getElementsByClassName("error")[0].appendChild(div);

   // after 3 seconds remove the div
   setTimeout(() => {
      document.getElementById("ERROR").remove();
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
         if (result.BlockedUrls !== undefined || result.BlockedUrls !== null) {
            result?.BlockedUrls.forEach((item) => {
               //  checking if the website is already blocked or not
               if (
                  item.hostname === webHostname &&
                  item.status === "Inprogress"
               ) {
                  showError("This website will be blocked", webHostname);
                  return;
               } else if (
                  item.hostname === webHostname &&
                  item.status === "Blocked"
               ) {
                  showError("Already blocked", webHostname);
                  return;
               } else {
                  // to store data in chrome storage
                  // .storage.local.set(data)
                  chrome.storage.local.set({
                     BlockedUrls: [
                        {
                           status: "Inprogress",
                           hostname: webHostname,
                        },
                     ],
                  });
               }
            });
         }
      });
   }
});
