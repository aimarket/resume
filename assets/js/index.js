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

skillBox = document.getElementsByClassName('boxHover')[0];

let infoBox = document.createElement('div');
infoBox.className = 'infoBox';
infoBox.style.position = 'absolute';
infoBox.style.width = '60%';
infoBox.style.height = '20%';
infoBox.style.left = '20%';
infoBox.style.top = '40%';
infoBox.style.backgroundColor = '#fff';
infoBox.style.border = '1px solid #000';
infoBox.style.borderRadius = '5px';
infoBox.style.zIndex = '-10';
infoBox.style.opacity = '0';
document.body.appendChild(infoBox);

//fix animations with information box
skillBox.addEventListener("mouseover", () => {
    let infoBox = document.getElementsByClassName('infoBox')[0];
    infoBox.style.animation = 'boxHover 1.4s ease-in forwards';
}
);
skillBox.addEventListener("mouseout", () => {
    let infoBox = document.getElementsByClassName('infoBox')[0];
    console.log(infoBox);
    infoBox.style.animation = 'boxHover 1.4s ease-in backwards';
    }
);

