var setupListeners = function () {
	main();
}
window.addEventListener("load", setupListeners);

var lastTime;
var main = function() {
  var now = Date.now();
  var dt = (now - lastTime) / 1000.0;

  lastTime = now;
  requestAnimationFrame(main);
}
