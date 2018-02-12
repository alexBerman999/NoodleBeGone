window.onload = function() 
{
    var htmlString = document.documentElement.outerHTML;
    htmlString = htmlString.toLowerCase();
    var alertStrings = ["snake", "boa constrictor", "cobra", "danger noodle", "dangernoodle", "scalyboi", "snek", "viper"];
    var found = false;
    for(var i = 0; i < alertStrings.length && !found; i++)
    {
        if(htmlString.includes(alertStrings[i]))
            found = true;
    }
    if(found)
        alert("Warning! Danger Noodles Detected!");	
}

