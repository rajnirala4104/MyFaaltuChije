console.log("Hello from /scripts/content.js");

document.body.innerHTML = `<div><span>Hello World</span></div>`;

document.body.style =
   "display: flex; justify-content: center; align-items: center; height: 100vh; text:3rem; ";

// this is how we can send a message to the background.js
chrome.runtime.sendMessage("This is a message from content.js", (response) => {
   console.log(response);
});

// it'll run when a message is received from background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   console.log(message);
   console.log(sender);
   sendResponse("Thanks.. for the message");
});
