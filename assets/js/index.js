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


//asyncrhonous function to iterate through all the h2 tags in the document and
//simulate a typewriter effect by placeing the letters one by one in the h2 tags
async function appear(ele, index) {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    await timer(3000);
    for (var i = 0; i < ele.length; i++) {
        typeWritterLocation[index].innerHTML += ele[i];
        await timer(Math.floor(Math.random() * 200)+200);
    }
}
let content = ['Contact Info', 'Education', 'Career History'];
let typeWritterLocation = document.getElementsByTagName('h2');

appear(content[0].split(''), 0);
appear(content[1].split(''), 1);
appear(content[2].split(''), 2);


skillBox = document.getElementsByClassName('boxHover');

let infoBox = document.createElement('div');
infoBox.className = 'infoBox';
infoBox.style.position = 'absolute';
infoBox.style.width = '77%';
infoBox.style.height = '95%';
infoBox.style.top = '0';
infoBox.style.left = '23%';
infoBox.style.backgroundColor = '#000000';
infoBox.style.border = '1px solid #000';
infoBox.style.borderRadius = '5px';
infoBox.style.zIndex = '10';
infoBox.style.pointerEvents = 'none';
infoBox.style.opacity = '0';
document.getElementsByClassName('skillGroups')[0].appendChild(infoBox);

function fillInfoBox(content){
    let info = document.createElement('div');
    info.className = 'skillInfo';
    info.style.textDecorationColor = '#fff';
    info.innerHTML = content;
    info.style.fontSize = '1em';
    info.style.backgroundColor = '#000000';
    info.style.border = '1px solid rgb(135, 206, 250)';
    info.style.borderRadius = '5px';
    info.style.boxShadow = '0px 0px 1em rgb(135, 206, 250)';
    info.style.width = '100%';
    info.style.height = '100%';
    info.style.zIndex = '11';
    info.style.position = 'relative';
    infoBox.appendChild(info);
}

//add event listener on hover to show the info box
for(var i = 0; i < skillBox.length; i++) {
    skillBox[i].addEventListener("mouseover", () => {
        infoBox = document.getElementsByClassName('infoBox')[0];
        if(document.body.clientWidth < 600) {
            infoBox.style.left = '30%';
            infoBox.style.width = '70%';
        }
        else {
            infoBox.style.left = '24%';
            infoBox.style.width = '76%';
        }
        fillInfoBox("Entering some information here");
        infoBox.style.animation = 'boxHover .4s ease-in forwards';
    }
    );
    skillBox[i].addEventListener("mouseout", () => {
        infoBox = document.getElementsByClassName('infoBox')[0];
        removeInfo = document.getElementsByClassName('skillInfo')[0];
        infoBox.removeChild(removeInfo);
        infoBox.style.animation = 'none';
        }
    );
}
