var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.parentNode.offsetWidth;
canvas.height = canvas.parentNode.offsetHeight;
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
var step = 0;
var lines = ["rgba(23, 23, 23, 0.3)",
    "rgba(23, 23, 23, 0.6)",
    "rgba(23, 23, 23, 0.8)"
];

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    step++;
    for (var j = lines.length - 1; j >= 0; j--) {
        ctx.fillStyle = lines[j];
        var angle = (step + j * 45) * Math.PI / 180;
        var deltaHeight = Math.sin(angle) * 100;
        var deltaHeightRight = Math.cos(angle) * 100;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 + deltaHeight);
        ctx.bezierCurveTo(canvas.width / 2, canvas.height / 2 + deltaHeight - 50, canvas.width / 2, canvas.height / 2 + deltaHeightRight - 50, canvas.width, canvas.height / 2 + deltaHeightRight);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(0, canvas.height / 2 + deltaHeight);
        ctx.closePath();
        ctx.fill();
    }
    requestAnimFrame(loop);
}
loop();
console.log('\n'.concat(' %c Huawei3Com Class 1 ').concat(' %c 04292021 ', '\n', '\n'), 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3;color:#232323; padding:5px 0;');