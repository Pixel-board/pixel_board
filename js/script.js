var canvas = document.getElementById('cl');
var ctx = canvas.getContext('2d');
var myColor = 'black';
var mySize = '5';

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
    }
    canvas.onmouseup = function() {
        canvas.onmousemove = null;
    }
}