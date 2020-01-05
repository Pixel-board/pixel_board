var canvas = document.getElementById('cl');
var ctx = canvas.getContext('2d');
var myColor = 'black';
var mySize = '10';
var coll = document.getElementsByClassName("collapsible");
var i;
var tool = document.getElementsByClassName("tool");
var j;

document.getElementById('brush').onclick = function() {
    canvas.onmousedown = function(event) {
        var x = event.offsetX;
            var y = event.offsetY;
            ctx.fillRect(x-mySize, y-mySize, mySize, mySize);
            ctx.fillStyle = myColor;
            ctx.fill();
        canvas.onmousemove = function(event) {
            var x = event.offsetX;
            var y = event.offsetY;
            ctx.fillRect(x-mySize, y-mySize, mySize, mySize);
            ctx.fillStyle = myColor;
            ctx.fill();
        };
        canvas.onmouseup = function() {
            canvas.onmousemove = null;
        };
    };
};

document.getElementById('eraser').onclick = function() {
    canvas.onmousedown = function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
            ctx.fillRect(x-15, y-15, 15, 20);
            ctx.fillStyle = 'white';
            ctx.fill();
        canvas.onmousemove = function(event) {
            var x = event.offsetX;
            var y = event.offsetY;
            ctx.fillRect(x-15, y-15, 15, 20);
            ctx.fillStyle = 'white';
            ctx.fill();
        };
        canvas.onmouseup = function() {
            canvas.onmousemove = null;
        };
    };
};

document.getElementById('colors').oninput = function() {
    myColor = this.value;
};

document.getElementById('size').oninput = function() {
    mySize = this.value;
};

document.getElementById('clear').onclick = function() {
    ctx.clearRect(0, 0, 1850, 500);
};

canvas.onmousedown = function(event) {
    var x = event.offsetX;
        var y = event.offsetY;
        ctx.fillRect(x-mySize, y-mySize, mySize, mySize);
        ctx.fillStyle = myColor;
        ctx.fill();
    canvas.onmousemove = function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        ctx.fillRect(x-mySize, y-mySize, mySize, mySize);
        ctx.fillStyle = myColor;
        ctx.fill();
    };
    canvas.onmouseup = function() {
        canvas.onmousemove = null;
    };
};

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        };
    });
};

for (j = 0; j < tool.length; j++) {
    tool[j].addEventListener("click", function() {
        this.classList.toggle("active");
        var toll = this.nextElementSibling;
        if (toll.style.display === "block") {
            toll.style.display = "none";
        } else {
            toll.style.display = "block";
        };
    });
};