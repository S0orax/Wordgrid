var fontSize = 40;

function RoundedBox(letter, posX, posY, size, radius) {
  this.posX = posX;
  this.posY = posY;
  this.size = size;
  this.radius = radius;
  this.letter = letter;

  this.draw = function(color) {
    ctx.beginPath();
    ctx.moveTo(this.posX + this.radius, this.posY);
    ctx.lineTo(this.posX + this.size - this.radius, this.posY);
    ctx.quadraticCurveTo(this.posX + this.size, this.posY, this.posX + this.size, this.posY + this.radius);
    ctx.lineTo(this.posX + this.size, this.posY + this.size - this.radius);
    ctx.quadraticCurveTo(this.posX + this.size, this.posY + this.size, this.posX + this.size - this.radius, this.posY + this.size);
    ctx.lineTo(this.posX + this.radius, this.posY + this.size);
    ctx.quadraticCurveTo(this.posX, this.posY + this.size, this.posX, this.posY + this.size - this.radius);
    ctx.lineTo(this.posX, this.posY + this.radius);
    ctx.quadraticCurveTo(this.posX, this.posY, this.posX + this.radius, this.posY);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = "bold " + fontSize + 'px sans-serif';
    var text = ctx.measureText(letter);
    ctx.fillStyle = '#000000';
    ctx.fillText(letter, posX + size / 2 - text.width / 2, posY + size / 2 + text.width / 2.5);
  }


}
