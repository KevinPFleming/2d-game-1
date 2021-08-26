// Setup the Canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
ctx.font = '50px Georgia';

let score = 0;
// the gameFrame variable Sets up Animation Loop to spawn new animated items
let gameFrame = 0;

// Mouse Interactivity
const canvasPosition = canvas.getBoundingClientRect();

const mouse = {
  x: canvas.width/2,
  y: canvas.height/2,
  click: false
}

// measures x and y distances from browser and not canvas
canvas.addEventListener('mousedown', function(event) {
  mouse.x = event.x - canvasPosition.left;
  mouse.y = event.y - canvasPosition.top;
  console.log(event);
})

