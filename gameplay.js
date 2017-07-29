function newGame() {
  //get input if needbe to assign these variables
  //if current size == past size, no need to call makeBoard();
  var size = 3;
  var sizesq = size * size;
  var phrases_file = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  var bingos = [];
  var needed_squares = [];
  var marked = new Set();
  fillBoard();

  function fillBoard(){
    if (document.getElementsByClassName('button-square').length < 1){
      createSquares();
      makeBingos();
    } else {
      getNewPhrases();
    }
  }
        
  function makeBingos(){
    for (var b = 0; b < size; b++){
      var r_bingo = new Set();
      var c_bingo = new Set();
      for (var t = 0; t < size; t++){
        r_bingo.add((b * size) + t);
        c_bingo.add((t* size) + b); 
      }
    bingos.push(r_bingo);
    bingos.push(c_bingo); 
    }
  
   if (size % 2 !== 0){
     var d0_bingo = new Set();
     var d1_bingo = new Set();
     for (var k = 0; k < size; k++){
        d0_bingo.add(k * (size + 1)); 
        d1_bingo.add((k + 1) * (size - 1)); 
      }
      bingos.push(d0_bingo);
      bingos.push(d1_bingo);
    }
  }

  function mark(e){
    var cur_btn = document.getElementById(e.target.id)
    if (cur_btn.className === 'marked'){
      cur_btn.className = 'button-square'; 
      marked.delete(Number(cur_btn.id));
    } else {
      cur_btn.className = 'marked';
      marked.add(Number(cur_btn.id));
      bingoCheck();
    }
  }
  

  function createSquares() {
    var phrases = [...getIndexesRandom()];

    for (var x = 0; x < sizesq; x++){
        var button = document.createElement('button');
        button.className = 'button-square';
        button.id = x;
        button.textContent = phrases_file[phrases[x]];
        document.getElementById('firstboard').appendChild(button);
        button.onclick = mark;
        //remember, no parens beacause assigning function NOT calling it
      }

  }

  function getPhrasesShuffle () {
  }

  function getIndexesRandom() {
    var numSet = new Set();
    while (numSet.size < sizesq) {
      numSet.add(Math.floor(Math.random() * 12));
    }
    return numSet;
  }

  function getNewPhrases() {
    var phrases = [...getIndexesRandom()];
      for (var i = 0; i < sizesq; i++){
        document.getElementById(i).textContent = phrases_file[phrases[i]];
        document.getElementById(i).className = 'button-square';
      }
    }


  function bingoCheck() {
    bingos.forEach(function(bingo_set){
     if (marked.isSuperset(bingo_set) === true ){
       gameWon();
       return;
     } else {
       return
     };
    })
  }


  function gameWon() {
    alert("BINGO!!!!!!!!!!!! You won!");
  
  }

  Set.prototype.isSuperset = function(subset) {
    for (var elem of subset) {
        if (!this.has(elem)) {
            return false;
        }
    }
    return true;
}
}
