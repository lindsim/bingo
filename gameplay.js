
var Tile = function(x, y, dem, phrase, count) {
  this.x = x;
  this.y = y;
  this.dem = dem;
  this.color = 'white';
  this.phrase = phrase;
  this.count = count;
}


function newGame() {
  //get input if needbe to assign these variables
  //start game

  var size = 3;
  var sizesq = size * size;
  var tiles = [];
  var counters = Array.apply(null, Array(size + size + 2)).map(Number.prototype.valueOf, 0);
  var phrases = ["dog", "cat", "fish", "pig", "turtle", "goblin", "turkey", "child", "gecko"];
	makeTiles();

  function makeTiles() {
    var w = document.getElementById('board').width;
    var space = 10;
    var xCoord = space;
    var yCoord = space;
    var dem = (w - space * (size + 1)) / size;

    for (var j = 0; j < size; j++) {
      xCoord = space
      for (var i = 0; i < size; i++) {
        tiles.push(new Tile(xCoord, yCoord, dem, getPhrase(), getCount(j, i)));
        xCoord += (dem + space)
      }
      yCoord += (dem + space)
    }
    drawTiles(tiles)
  }

  function getCount(xCoordPair, yCoordPair) {
    var countThese = [];
    countThese.push(yCoordPair + size);
    countThese.push(xCoordPair);
    if (xCoordPair == yCoordPair) {
      countThese.push(size * 2);
      if (xCoordPair == (size - 1) / 2) {
        countThese.push(size * 2 + 1);
      }
    } else if (xCoordPair + yCoordPair == (size - 1)) {
      countThese.push(size * 2 + 1);
    }
    return countThese
  }

  function drawTiles(tiles) {
    var canvas = document.getElementById('board');
    var ctx = canvas.getContext('2d');
    if (canvas.getContext) {
      for (var t = 0; t < sizesq; t++) {
        ctx.fillStyle = tiles[t].color;
        ctx.fillRect(tiles[t].x, tiles[t].y, tiles[t].dem, tiles[t].dem)
      }
    }
    drawPhrases(tiles);
  }

  function drawPhrases() {
    var canvas = document.getElementById('board');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    for (t = 0; t < sizesq; t++) {
      ctx.fillText(tiles[t].phrase, tiles[t].x + 20, tiles[t].y + 20);
    }
  }

  function getPhrase() {
    return phrases.pop();
  }
  onclick = function(mouseInfo) {
    var x = (mouseInfo.offsetX);
    var y = (mouseInfo.offsetY);
    for (var i = 0; i < sizesq; i++) {
      if (tiles[i].x <= x && x <= (tiles[i].x + tiles[i].dem) && tiles[i].y <= y && y <= (tiles[i].y + tiles[i].dem)) {
        changeColor(tiles[i], counters, size);
      }
    }
  };

}



  function countUp(tile, counters, size) {
    for (t = 0; t < tile.count.length; t++) {
      counters[tile.count[t]] += 1;
      if (counters[tile.count[t]] == size) {
        drawBingo();
        gameOverState();
      }
    }
  }

  function countDown(tile, counters) {
    for (t = 0; t < tile.count.length; t++) {
      counters[tile.count[t]] -= 1;
    }
  }

	function gameOverState(){
  	 onclick = function(mouseInfo) {}
  }

  function drawBingo() {
    var canvas = document.getElementById('board');
    var ctx = canvas.getContext('2d');
    console.log("bingo");
  }

  function changeColor(tile, counters, size) {
    var canvas = document.getElementById('board');
    if (canvas.getContext) {
      var cx = canvas.getContext('2d');
      if (tile.color == 'white') {
        countUp(tile, counters, size);
        cx.fillStyle = 'gray';
        cx.fillRect(tile.x, tile.y, tile.dem, tile.dem);
        tile.color = 'black';
        cx.fillStyle = 'purple';
        cx.fillText(tile.phrase, tile.x + 20, tile.y + 20);
      } else {
        countDown(tile, counters);
        tile.color = 'white'
        cx.fillStyle = 'white';
        cx.fillRect(tile.x, tile.y, tile.dem, tile.dem);
        cx.fillStyle = 'purple';
        cx.fillText(tile.phrase, tile.x + 20, tile.y + 20);
      }
    }
  }
}

function makeTiles() {
  var tiles = [];
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

function drawTiles(tiles) {
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



