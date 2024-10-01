console.log("Hello from background.js");

// it'll run when a tab is activated
chrome.tabs.onActivated.addListener(async (tab) => {
   // get information about the tab that was just activated
   await chrome.tabs.get(tab.tabId, (currentTabInformation) => {
      if (currentTabInformation.url === "chrome://newtab/") {
         console.log("------- matched --------");
         // this is how we can run our script in the tab using background.js
         chrome.scripting.executeScript({
            target: { tabId: tab.tabId },
            files: ["./scripts/content.js"],
         });

         // sending our message to content.js after 2 seconds
         setTimeout(() => {
            // sending a message to the content.js
            chrome.tabs.sendMessage(
               tab.tabId,
               `message from background.js - ${tab.tabId}`,
               (response) => {
                  console.log(response);
               }
            );
         }, 2000);
      }
   });
});

// it'll run when a message is received from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   console.log(message);
   console.log(sender);
   sendResponse(`hii from background.js`);
});
