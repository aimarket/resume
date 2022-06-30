
const image1 = new Image();
image1.src = base64Image();
console.log("this is the string" + base64Image);
image1.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0,0,canvas.width, canvas.height);
    console.log(pixels);

    const inputSlider = document.getElementById('resolution');
    const inputLabel = document.getElementById('resolutionLabel');
    let cellSize = parseInt(inputSlider.value);
    let imageCellArray = [];
    let symbols = [];
    ctx.fillStyle = 'white';
    ctx.font = cellSize + 'px Verdana';
/*
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'white';
*/
    //ctx.globalCompositeOperation = 'difference';
    class Cell{
        constructor(x, y, symbol, color){
            this.x = x; 
            this.y = y;
            this.symbol = symbol;
            this.color = color;
        }
        draw(){
            ctx.fillStyle = 'white';
            ctx.fillText(this.symbol, this.x + 1, this.y + 1);
            ctx.fillStyle = this.color;
            ctx.fillText(this.symbol, this.x, this.y);

        }
    }

    function convertToSymbol(g){
        if(g > 250) return '@';
        else if (g > 240) return '*';
        else if (g > 220) return '+';
        else if (g > 200) return '#';
        else if (g > 180) return '&';
        else if (g > 160) return '%';
        else if (g > 140) return '_';
        else if (g > 120) return ':';
        else if (g > 100) return '£';
        else if (g > 80) return '/';
        else if (g > 60) return '-';
        else if (g > 40) return 'X';
        else if (g > 20) return 'W';
        else return '';
    };

    function scanImage(){
        cellSize = parseInt(inputSlider.value);
        ctx.font = cellSize + 'px Verdana';

        imageCellArray = [];
        let i = 0;
        for (let y = 0; y < pixels.height; y += cellSize){
            for (let x = 0; x < pixels.width; x += cellSize){
                i++;
                const posX = x * 4;
                const posY = y * 4;
                const pos = (posY * pixels.width) + posX;

                if (pixels.data[pos + 3] > 128) {
                    const red = pixels.data[pos];
                    const green = pixels.data[pos + 1];
                    const blue = pixels.data[pos + 2];
                    const total = red + green + blue;
                    const averageColorValue = total/3;
                    const symbol = convertToSymbol(averageColorValue);
                    const color = "rgb(" + red + "," + green + "," + blue + ")";
                    if (total > 200) imageCellArray.push(new Cell(x, y, symbol, color));
                    symbols.push(symbol);
                }

/*              let posX = x * 4;
                let posY = y * 4;
                let pos = (posY * imageData.width) + posX;
                if (http://imageData.data[pos + 3] > 128) {
                    let color = "rgb(" + http://imageData.data[pos]
                        + "," + http://imageData.data[pos + 1]
                        + "," + http://imageData.data[pos + 2] + ")";
*/
            }
        }
        //console.log(imageCellArray);
        //console.log(symbols);
    };
    scanImage();
    function drawAscii(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        for (let i = 0; i < imageCellArray.length; i++){
            imageCellArray[i].draw();
        }
    };
    drawAscii();

    function handleSlider(){
        console.log(inputSlider.value)
        if (inputSlider.value == 1){
            inputLabel.innerHTML = 'Original image';
            ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        } else {
            inputLabel.innerHTML = 'Resolution: ' + inputSlider.value + ' px';
            scanImage();
            drawAscii();
        }
    };
    handleSlider();
    inputSlider.addEventListener('change', handleSlider);
});