var setupListeners = function () {
	main();
}
window.addEventListener("load", setupListeners);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var grid = new Grid(["ABC", "DEF", "GHI"]);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  grid.draw();
}

var lastTime;
var main = function() {
  var now = Date.now();
  var dt = (now - lastTime) / 1000.0;

  render();

  lastTime = now;
  requestAnimationFrame(main);
}
