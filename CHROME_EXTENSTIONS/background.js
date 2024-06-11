// a function to check the chrome tab that current tab is what we want or not
chrome.tabs.onUpdated.addEevenlistner((tabId, tab) => {
    // checking the tab, is it "youtube.com" or not
    if (tab.url && tab.url.includes('youtube.com/watch')) {
        // getting the unique it of a youtube video
        const queryParameters = tab.url.split("?")[1];
        const urlParamerter = new URLSearchParams(queryParameters);
        console.log(urlParamerter);

        // message that we want to send to "contentScript.js"
        let message = {
            type: "NEW",
            videoId: urlParamerter.get("v")
        }
        //sendimg a message to "contentScript.js"
        chrome.tabs.sendMessage(tabId, message);



    }
});