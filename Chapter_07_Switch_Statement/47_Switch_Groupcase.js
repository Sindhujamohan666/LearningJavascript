let browser="Edge";
switch(browser){
    //Grouping cases together
    case "chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("You are using a Chromium based browser");
        break;
    case "Firefox":
        console.log("You are using Mozilla project");
        break;
    case "Safari":
         console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");
}