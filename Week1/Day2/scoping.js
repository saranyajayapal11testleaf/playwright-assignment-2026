const browserVersion = "Chrome";

function getBrowserVersion () {
    if (browserVersion === "Chrome") {
        let browserVersion = "Chrome variable";
        console.log("print browserversion chrome inside function"+ browserVersion);
    }
    console.log("print browserversion chrome outside block"+ browserVersion);
}

getBrowserVersion()


