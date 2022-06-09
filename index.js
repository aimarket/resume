//create an async function to iterate through all the <p> tags in the documatn and 
//change the css with a delay of 1 second after each element

async function revealTags() {
    // Returns a Promise that resolves after "ms" Milliseconds
    const timer = ms => new Promise(res => setTimeout(res, ms))
    
    var h3Tags = document.getElementsByTagName('h3');
    await timer(700);
    for (var i = 0; i < h3Tags.length; i++) {
        await timer(100);
        h3Tags[i].style.opacity = '1';
    }

    var h4Tags = document.getElementsByTagName('h4');
    await timer(700);
    for (var i = 0; i < h4Tags.length; i++) {
        await timer(100);
        h4Tags[i].style.opacity = '1';
    }

    var h5Tags = document.getElementsByTagName('h5');
    await timer(700);
    for (var i = 0; i < h5Tags.length; i++) {
        await timer(100);
        h5Tags[i].style.opacity = '1';
    }

    var spanTags = document.getElementsByTagName('span');
    await timer(1000);
    for (var i = 0; i < spanTags.length; i++) {
        await timer(70);
        spanTags[i].style.opacity = '1';
    }

    var pTags = document.getElementsByTagName('p');
    await timer(1000);
    for (var i = 0; i < pTags.length; i++) {
        await timer(50);
        pTags[i].style.color = 'aliceblue';
    }
}

revealTags();