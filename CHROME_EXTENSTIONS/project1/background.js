chrome.runtime.onMessage.addListener((message, sender) => {
   if (message.closeTab) {
      chrome.storage.local.get("BlockedUrls", (data) => {
         let blockedUrls = [
            ...data.BlockedUrls,
            {
               status: "Blocked",
               hostname: new URL(sender.tab.url).hostname,
            },
         ];
         chrome.storage.local.set({ BlockedUrls: blockedUrls });
      });
      chrome.tabs.remove(sender.tab.id);
   }
});
