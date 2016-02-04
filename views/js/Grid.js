var colorSquareFill = '#DEB887';

function Grid(rows) {
  this.rows = rows;




  this.createBox = function (letter, posX, posY, size, radius) {
    var box = new RoundedBox(letter, posX, posY, size, radius);
    box.draw(colorSquareFill);
  }



  this.draw = function() {
    var margin = 5;
    var rowslength = rows.length;

    var sizeBox = canvas.width / rowslength - margin - margin / 4;

    for (var i = 0; i < rowslength; i++) {
      for (var j = 0; j < rowslength; j++) {
        var posX = margin + i * (sizeBox + margin);
        var posY = margin + j * (sizeBox + margin);

        this.createBox(rows[j][i], posX, posY, sizeBox, 5);
      }
    }
  }


}
