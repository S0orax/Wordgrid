var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var colorSquareFill = '#CCCCCC';


function roundRec(posX, posY, size, radius) {
  ctx.beginPath();
  ctx.moveTo(posX + radius, posY);
  ctx.lineTo(posX + size - radius, posY);
  ctx.quadraticCurveTo(posX + size, posY, posX + size, posY + radius);
  ctx.lineTo(posX + size, posY + size - radius);
  ctx.quadraticCurveTo(posX + size, posY + size, posX + size - radius, posY + size);
  ctx.lineTo(posX + radius, posY + size);
  ctx.quadraticCurveTo(posX, posY + size, posX, posY + size - radius);
  ctx.lineTo(posX, posY + radius);
  ctx.quadraticCurveTo(posX, posY, posX + radius, posY);
  ctx.closePath();
}

function drawBox(letter, posX, posY, size, radius) {
  roundRec(posX, posY, size, radius);
  ctx.fillStyle = colorSquareFill;
  ctx.fill();
  // TODO: Adding the letter
}

function computeGridLength(gridArray) {
  var cpt = 0;
  for (var i = 0; i < gridArray.length; i++) {
    cpt = cpt + gridArray[i].length;
  }
  return Math.sqrt(cpt);
}

function drawGrid() {
  var grid = ["AAA", "AAA", "AAA"];
  var gridLength = computeGridLength(grid);

  // TODO: compute the position of all box

  drawBox("A", 50, 50, 64, 5);
}

function setupEventListener() {
  drawGrid();
}

window.onload = setupEventListener;
