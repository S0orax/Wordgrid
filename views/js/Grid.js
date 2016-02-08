var setupListeners = function () {
    var grid = new Grid("ABCDEFGHI");
	grid.draw();

    updateBox();
}
window.addEventListener("load", setupListeners);

function updateBox() {
    var box = document.getElementsByClassName("box");
    var n = box.length;
    var width = window.getComputedStyle(box[0]).getPropertyValue("width");
    for (var i = 0; i < n; i++) {
        box[i].style.height = width;
        box[i].style.fontSize = width;
    }
}
window.addEventListener("resize", updateBox);

function Grid(rows) {
  this.rows = rows;

  this.createBox = function (letter) {
    var grid = document.getElementById("grid");
    var box = document.createElement("div");
    box.className = "col-xs-4 coverBox";
    box.innerHTML = "<h1 class='box'>"+letter+"</h1>";
    grid.appendChild(box);
  }

  this.draw = function() {
    var n = rows.length;
    for (var i = 0; i < n; i++) {
        this.createBox(rows[i]);
    }
  }
}
