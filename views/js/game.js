var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var colorSquareFill = '#DEB887';

function drawGrid() {
  var grid = new Grid(["ABC", "DEF", "GHI"]);
  grid.draw();
}

function setupEventListener() {
  drawGrid();
}

window.onload = setupEventListener;
