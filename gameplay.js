var Tile = function(x, y, dem, phrase) {
  this.x = x;
  this.y = y;
  this.dem = dem;
  this.color = 'white';
  this.phrase = phrase;
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
      tiles.push(new Tile(xCoord, yCoord, dem, getPhrase()));
      xCoord += (dem + space)
    }
    yCoord += (dem + space)
  }
  drawTiles(tiles)
}

function drawTiles(tiles) {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');
  var size = 3;
  if (canvas.getContext) {
    for (var t = 0; t < 9; t++) {
      ctx.fillStyle = tiles[t].color;
      ctx.fillRect(tiles[t].x, tiles[t].y, tiles[t].dem, tiles[t].dem)
    }
  }
  drawPhrases(tiles);
}


onclick = function(mouseInfo) {
  var x = (mouseInfo.offsetX);
  var y = (mouseInfo.offsetY);
  for (var i = 0; i < 9; i++) {
    if (tiles[i].x <= x && x <= (tiles[i].x + tiles[i].dem) && tiles[i].y <= y && y <= (tiles[i].y + tiles[i].dem)) {
      changeColor(tiles[i]);
    }
  }
};

function getPhrase() {
  var phrases = ["dog", "cat", "fish", "pig", "turtle", "goblin", "turkey", "child", "gecko"];
  return phrases.pop();
}



function drawPhrases() {
  var phrases = ["dog", "cat", "fish", "pig", "turtle", "goblin", "turkey", "child", "gecko"];
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'purple';
  for (t = 0; t < 9; t++) {
    ctx.fillText(tiles[t].phrase, tiles[t].x + 20, tiles[t].y + 20);
  }
}

function changeColor(tile) {
  var canvas = document.getElementById('board');

  if (canvas.getContext) {
    var cx = canvas.getContext('2d');
    if (tile.color == 'white') {
      cx.fillStyle = 'gray';
      cx.fillRect(tile.x, tile.y, tile.dem, tile.dem);
      tile.color = 'black';
      cx.fillStyle = 'purple';
      cx.fillText(tile.phrase, tile.x + 20, tile.y + 20);
    } else {
      tile.color = 'white'
      cx.fillStyle = 'white';
      cx.fillRect(tile.x, tile.y, tile.dem, tile.dem);
      cx.fillStyle = 'purple';
      cx.fillText(tile.phrase, tile.x + 20, tile.y + 20);
    }
  }
}

