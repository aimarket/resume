//create an async function to iterate through all the <p> tags in the documatn and 
//change the css with a delay of 1 second after each element

async function revealPTags() {
    // Returns a Promise that resolves after "ms" Milliseconds
    const timer = ms => new Promise(res => setTimeout(res, ms))
    var pTags = document.getElementsByTagName('p');
    await timer(4000);
    for (var i = 0; i < pTags.length; i++) {
        await timer(50);
        pTags[i].style.color = 'aliceblue';
    }
}

async function revealSpanTags() {
    // Returns a Promise that resolves after "ms" Milliseconds
    const timer = ms => new Promise(res => setTimeout(res, ms))
    var spanTags = document.getElementsByTagName('span');
    await timer(2000);
    for (var i = 0; i < spanTags.length; i++) {
        await timer(100);
        spanTags[i].style.opacity = '1';
    }
}

async function revealH3Tags() {
    // Returns a Promise that resolves after "ms" Milliseconds
    const timer = ms => new Promise(res => setTimeout(res, ms))
    var h3Tags = document.getElementsByTagName('h3');
    await timer(2000);
    for (var i = 0; i < h3Tags.length; i++) {
        await timer(200);
        h3Tags[i].style.opacity = '1';
    }
}

async function revealH4Tags() {
    // Returns a Promise that resolves after "ms" Milliseconds
    const timer = ms => new Promise(res => setTimeout(res, ms))
    var h4Tags = document.getElementsByTagName('h4');
    await timer(2000);
    for (var i = 0; i < h4Tags.length; i++) {
        await timer(200);
        h4Tags[i].style.opacity = '1';
    }
}

async function revealH5Tags() {
    // Returns a Promise that resolves after "ms" Milliseconds
    const timer = ms => new Promise(res => setTimeout(res, ms))
    var h5Tags = document.getElementsByTagName('h5');
    await timer(2000);
    for (var i = 0; i < h5Tags.length; i++) {
        await timer(200);
        h5Tags[i].style.opacity = '1';
    }
}

revealH3Tags();
revealH4Tags();
revealH5Tags();
revealSpanTags();
revealPTags();