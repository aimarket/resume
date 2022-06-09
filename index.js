//create an async function to iterate through all the <p> tags in the documatn and 
//change the css with a delay of 1 second after each element


async function changeCSS() {
    // Returns a Promise that resolves after "ms" Milliseconds
    const timer = ms => new Promise(res => setTimeout(res, ms))
    var pTags = document.getElementsByTagName('p');
    await timer(3000);
    for (var i = 0; i < pTags.length; i++) {
        await timer(50);
        pTags[i].style.color = 'aliceblue';
    }
}

changeCSS();