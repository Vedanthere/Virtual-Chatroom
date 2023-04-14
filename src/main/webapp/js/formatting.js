let toolbar = document.getElementById('toolbar');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

const canvasOffsetY = canvas.offsetTop;
const canvasOffsetX = canvas.offsetLeft;

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let isPainting = false;
let lineWidth = 1;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear_board') {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        context.strokeStyle = e.target.value;
    }

    if(e.target.id === 'stroke_width') {
        lineWidth = e.target.value;
    }

});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    context.lineWidth = lineWidth;
    context.lineCap = 'round';

    context.lineTo(e.clientX-canvasOffsetX, e.clientY - canvasOffsetY);
    context.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    context.stroke();
    context.beginPath();
});

canvas.addEventListener('mousemove', draw);