var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var colorSquareFill = '#DEB887';

function drawBox(letter, posX, posY, size, radius) {
  var box = new RoundedBox(letter, posX, posY, size, radius);
  box.draw(colorSquareFill);
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
