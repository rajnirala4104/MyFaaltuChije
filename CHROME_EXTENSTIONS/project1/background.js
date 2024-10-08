chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   if (message.closeTab) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
         chrome.tabs.remove(tabs[0].id);
      });
   }
});
