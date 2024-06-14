(async () => {
    console.log("this message from background.js");
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    console.log(tab)
})();
