window.addEventListener('keydown',e => {
    let ascii, key = e.key;
    if(key.length == 1) {
        ascii = key.charCodeAt(0);
        if(ascii < 128 && e.ctrlKey) {
             ascii = ascii & 0x1f;
        }
    }
    if( typeof ascii == "number" && ascii < 128) {
        console.log(`ASCII code ${ascii} entered from keyboard`);
    }
    else {
        console.log( key + " is not in the ASCII character set");
    }
});