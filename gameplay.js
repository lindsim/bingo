var Tiles = function(row, column, phrase, count) {
  this.row = row;
  this.column = column;
  this.color = 'white';
  this.phrase = phrase;
  this.count = count;
}


function newGame() {
  //get input if needbe to assign these variables
  //start game

  var size = 3;
  var sizesq = size * size;

  var counters = Array.apply(null, Array(size + size + 2)).map(Number.prototype.valueOf, 0);
  var phrases = ["dog", "cat", "fish", "pig", "turtle", "goblin", "turkey", "child", "gecko"];
  makeTiles();



  function makeTiles(tiles) {
    //make tile buttons
    //get phrase list and match them up
    //first tile is r 0 c 0; second is r0 c1


    //this.phrase = allPhrases[index]
  
  }

    function makeBoard() {
    //make a table and fill it with buttons as it goes
  }


  function getPhrases() {
    //parse file and randomly choose sqsize of them 
    //return phrase list
  }

  function bingoCheck() {
    //only called when at least size num of buttons clicked
    //checks for r, c
    //bingos happen at 3 r's the same, 3 c's the same, or [r0, c0] [r1 c1] [r2, c2]
    //and [r0 c2], [r1 c1], 
    //or we could index them - 036, 147, 258, 012, 345, 678, 048, 346 for 
    //quicker access; we couldn't need to assign them r's or c's or even an index number
    //we'd have that in the list of tiles 
    //0 + size + size
    //1 + size + size
    //2 + size + size
    //if tile[0] is clicked is tile 3? tile 6? 
    //tile 1? tile 2? 
    //tile 4? tile 8? 
    //essentially go down tree
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


function gameOverState() {
  onclick = function(mouseInfo) {}
  
}

function drawBingo() {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');
}
}
