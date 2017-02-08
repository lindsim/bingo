

var Tile = function(x, y, dem) {
  this.x = x;
  this.y = y;
  this.dem = dem;
  this.color = 'white';
}
var tiles = [];

function makeTiles() {
  var w = document.getElementById('board').width
  var space = 10;
  var xCoord = space;
  var yCoord = space;
  var size = 3;
  var dem = (w - space * (size + 1)) / size;

  for (var j = 0; j < size; j++) {
    xCoord = space
    for (var i = 0; i < size; i++) {
      tiles.push(new Tile(xCoord, yCoord, dem));
      xCoord += (dem + space)
    }
    yCoord += (dem + space)
  }
 drawTiles(tiles)
}

function drawTiles(tiles, click) {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');
  var size = 3;
  if (canvas.getContext) {
    for (var t = 0; t < (size * size); t++) {
      ctx.fillStyle = tiles[t].color;
      ctx.fillRect(tiles[t].x, tiles[t].y, tiles[t].dem, tiles[t].dem)
    }
  }
}

Tile.prototype.isUnderMouse = function(x, y) {
    return x >= this.x && x <= this.x + this.width  &&
        y >= this.y && y <= this.y + this.width;
};

mouseClicked = function(tiles) {     
	console.log('here')
	for (var i = 0; i < 9; i++) {
  	if (tiles[i].isUnderMouse(mouseX, mouseY)) {
    	changeColor(tiles[i]);
        }
    }
};


/*function assignPhrases(tile){
change this to read file and choose random list of size * size 
	var phrases = [
      ["dog", "cat", "fish"],
      ["pig", "turtle", "goblin"],
      ["turkey", "child", "gecko"]
    ];
    
   tile.phrase = phrases.pop(); 
}
*/

function changeColor(tile){
  if (tile.color == 'white'){
    tile.color = 'black'
  } else {
    tile.color = 'white'
  }
}

