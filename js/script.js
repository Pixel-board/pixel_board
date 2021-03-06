var canvas = document.getElementById('cl');
var ctx = canvas.getContext('2d');
var myColor = 'black';
var defaultBrushSize = document.getElementById('size').value;
var eraserSize = '20';
var pencilSize = '1';
var coll = document.getElementsByClassName('collapsible');
var tool = document.getElementsByClassName('tool');
var isDrawing = false;
var currentTool = 'brush';
var canvasWidth = window.innerWidth - 85;
var canvasHeight = window.innerHeight;

init();

function init() {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    canvasHandlers();
    toolsHandlers();
    panelsListeners();
}

function canvasHandlers() {
    canvas.onmousedown = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;

        isDrawing = true;
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = myColor;

        switch (currentTool) {
            case 'pencil':
                ctx.lineWidth = pencilSize;
                break;
            case 'brush':
                ctx.lineWidth = defaultBrushSize;
                break;
            case 'eraser':
                ctx.lineWidth = eraserSize;
                ctx.globalCompositeOperation="destination-out";
                break;
        }

        ctx.moveTo(x, y);    
        ctx.lineTo(x, y);
        ctx.stroke();
    };

    canvas.onmousemove = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;

        if (isDrawing) {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };

    canvas.onmouseup = function () {
        isDrawing = false;
    };
}

function toolsHandlers() {
    document.getElementById('colors').oninput = function () {
        myColor = this.value;
    };

    document.getElementById('size').oninput = function () {
        defaultBrushSize = this.value;
    };

    document.getElementById('canvasWidth').oninput = function () {
        canvas.width = this.value;
    };

    document.getElementById('canvasHeight').oninput = function () {
        canvas.height = this.value;
    };

    document.getElementById('erasersize').oninput = function () {
        eraserSize = this.value;
    };

    document.getElementById('clear').onclick = function () {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    };

    document.getElementById('pouring').onclick = function () {
        //я думаю над этим.
    };

    document.getElementById('pipette').onclick = function () {
        //я думаю над этим.
    };

    document.getElementById('download').onclick = function () {
        var image = getImage(document.getElementById("cl"));
        saveImage(image);
    };

    document.getElementById('brush').onclick = function () {
        currentTool = 'brush';
    };

    document.getElementById('pencil').onclick = function () {
        currentTool = 'pencil';
    };

    document.getElementById('eraser').onclick = function () {
        currentTool = 'eraser';
    };
}

function getImage(canvas){
    var imageData = canvas.toDataURL();
    var image = new Image();
    image.src = imageData;
    return image;
}

function saveImage(image) {
    var link = document.createElement("a");
 
    link.setAttribute("href", image.src);
    link.setAttribute("download", "canvasImage");
    link.click();
}

function panelsListeners() {
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            };
        });
    }

    for (var i = 0; i < tool.length; i++) {
        tool[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var toll = this.nextElementSibling;
            if (toll.style.display === 'block') {
                toll.style.display = 'none';
            } else {
                toll.style.display = 'block';
            };
        });
    }
}
