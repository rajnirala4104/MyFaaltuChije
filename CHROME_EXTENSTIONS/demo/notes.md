# NOTES

## manifest.json

To enjact our scripts

```
"content_scripts": [
      {
         "js": ["./scripts/content.js", "","",""],
         "matches": ["<all_urls>"]
      }
]
```

This is how we can send message to background.js from content.js. This is content.js code

```
chrome.runtime.sendMessage("This is a message from content.js", (response) => {
   console.log(response);
});
```

And this code is from background.js to send the message to content.js

```
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   console.log(message);
   console.log(sender);
   sendResponse(`hii from background.js`);
});
```
