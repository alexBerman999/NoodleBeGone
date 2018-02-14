window.onload = function() 
{
    chrome.storage.sync.get("whitelist", function callback(items) {
        var whitelisted = false;
        if(items.whitelist != undefined)
        {
            for(var i = 0; i < items.whitelist.length && !whitelisted; i++)
            {
                if(window.location.href.valueOf() === items.whitelist[i].valueOf())
                    whitelisted = true;
            }
        }
        if(!whitelisted)
        {
            var htmlString = document.documentElement.outerHTML;
            htmlString = htmlString.toLowerCase();
            var alertStrings = ["snake", "boa constrictor", "cobra", "danger noodle", "dangernoodle", "scalyboi", "viper"];
            var found = false;
            for(var i = 0; i < alertStrings.length && !found; i++)
            {
                if(htmlString.includes(alertStrings[i]))
                    found = true;
            }
            if(found)
                alert("Warning! Danger Noodles Detected!");	
    }
    });
}

