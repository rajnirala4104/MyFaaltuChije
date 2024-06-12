console.log("running..");

const pickBtn = document.getElementById('pickBtn');
pickBtn.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    // injecting a script to current tab
    chrome.scripting.executeScript({
        // current tab id which is coming from chrome.tab api
        target: { tabId: tab.id },

        // a function that we want to run in current tab
        function: pickColor
    }, async (injectionResult) => {
        console.log(injectionResult)
    })
});

async function pickColor() {
    try {

        const eyeDropper = new window.EyeDropper();

        // -------- BUG ---------- 
        return await eyeDropper.open();

    } catch (error) {
        console.log(error)
    }
}