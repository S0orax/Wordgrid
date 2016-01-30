var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var colorSquareFill = '#DEB887';
var fontSize = 40;


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

  ctx.font = "bold " + fontSize + 'px sans-serif';
  var text = ctx.measureText(letter);
  ctx.fillStyle = '#000000';
  ctx.fillText(letter, posX + size / 2 - text.width / 2, posY + size / 2 + text.width / 2.5);
}

function drawGrid() {
  var grid = ["ABC", "DEF", "GHI"];
  var margin = 5;
  
  var sizeBox = canvas.width / grid.length - margin - margin / 4;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      var posX = margin + i * (sizeBox + margin);
      var posY = margin + j * (sizeBox + margin);

      drawBox(grid[j][i], posX, posY, sizeBox, 5);
    }
  }
}

function setupEventListener() {
  drawGrid();
}

window.onload = setupEventListener;
