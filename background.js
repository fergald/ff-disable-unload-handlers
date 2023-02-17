console.log('Background.js running');

browser.contextMenus.create({
    id: "new-tab",
    title: "Create a new google.com tab"
});

browser.contextMenus.create({
    id: "go-to-wikipedia",
    title: "Go to wikipedia"
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "new-tab") {
        browser.tabs.create({url: "https://www.google.com/search?q=simple+text"}).then(() => {});
    }    
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "go-to-wikipedia") {
        browser.tabs.update({url: "https://wikipedia.org"}).then(() => {});
    }    
});

function handleCreated(tab) {
    console.log('handlerCreated listener onCreated')
    browser.tabs.executeScript({
        runAt: "document_start",
        file: "disable_unload.js"
    });
}

browser.tabs.onCreated.addListener(handleCreated);