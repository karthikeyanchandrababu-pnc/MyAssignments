function launchbrowser(browswerName){
        if("chrome"){
            console.log("this is chrome")
        } else if("msedge"){
            console.log("this is msedge")
        } else{
            console.log("using default browser")
        }
        }
function runtests(testType){
    switch(testType){
        case "smoke":
            console.log("smoke testing is done")
            break;
        case "sanity":
            console.log("sanity testing is done")
            break;
        case "regression":
            console.log("regression testing is done")
            break;
        default:
            console.log("smoke testing is done")
            break;
    }
}
launchbrowser("msedge")
runtests("regression")