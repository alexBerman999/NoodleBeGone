function whitelist() 
{
    var currenturl = "";
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs)
        {
            chrome.storage.sync.get("whitelist", function(items) 
            {
                currenturl = tabs[0].url;
                var addList = [];
                if(items.whitelist != undefined)
                    addList = items.whitelist;
                addList.push(currenturl);
                chrome.storage.sync.set({"whitelist": addList}, function() 
                {
                    console.log('Added ' + currenturl);
                });
            });
        }
    );
}
function clearwl()
{
    chrome.storage.sync.remove("whitelist");
    console.log('Removed whitelist');
}
document.getElementById('whitelistbtn').onclick = whitelist;
document.getElementById('clearwhitelistbtn').onclick = clearwl;
