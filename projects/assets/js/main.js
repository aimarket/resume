var container = document.getElementsByClassName("software")[0],
    canvas = container.appendChild( document.createElement( 'canvas' ) ),
    context = canvas.getContext( '2d' );
context.globalCompositeOperation = 'lighter';
canvas.className = 'matrix';
canvas.width = container.clientWidth/2;//set the width of the canvas to the width of the container
canvas.height = container.clientHeight/2;//set the height of the canvas to the height of the container

var clicked = false;
var show = false
container.addEventListener("mouseover", () => {
    if(clicked == false) {
        draw();
    }
    clicked = true;
    show = true;
});
container.addEventListener("mouseout", () => {
    show = false;
});
var textStrip = ['诶', '比', '西', '迪', '伊', '吉', '艾', '杰', '开', '哦', '屁', '提', '维'];

var stripCount = 60, charCount = 40, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();
/*  for every character in the vertical strip,  */
for (var i = 0; i < charCount; i++) {
    stripX[i] = Math.floor(Math.random()*1265);//x-axis location of the strip
    stripY[i] = -100;//y-axis location of the strip
    dY[i] = Math.floor(Math.random()*7)+3; //speed of the strip
    stripFontSize[i] = Math.floor(Math.random()*16)+8; // font size for the vertical strip
}

//draw the vertical strip
function drawStrip(x, y) {
    for (var k = 0; k <= 20; k++) {
        var randChar = textStrip[Math.floor(Math.random()*textStrip.length)];//random character from the textStrip array
        if (context.fillText) {
            context.fillStyle = '#000';//color of the text
            context.fillText(randChar, x, y);//draw the text and location
        }
        y -= stripFontSize[k];//move the text down based on the font size
    }
}

function draw() {
    // clear the canvas and set the properties
    context.clearRect(0, 0, canvas.width, canvas.height);
    //for the number of characters in the vertical strip, draw that many strips
    if(show)
        {for (var j = 0; j < stripCount; j++) {
            context.font = stripFontSize[j]+'px';//font size is set based on the font size array
            context.textBaseline = 'top';//text is drawn from the top of the canvas
            context.textAlign = 'center';//text is drawn from the center of the canvas

            if (stripY[j] > 1000) {//if the strip is at the bottom of the canvas, reset it to the top
                stripX[j] = Math.floor(Math.random()*canvas.width);//reset the x-axis location of the strip
                stripY[j] = -100;//reset the y-axis location of the strip
                dY[j] = Math.floor(Math.random()*7)+3; //reset the speed of the strip
                stripFontSize[j] = Math.floor(Math.random()*16)+8;//reset the font size of the strip
                drawStrip(stripX[j], stripY[j]);//draw the strip
            } else drawStrip(stripX[j], stripY[j]);//draw the strip

            stripY[j] += dY[j];//move the strip down based on the speed
        }}
    setTimeout(draw, 70);//draw the strip again in 50 milliseconds
}


