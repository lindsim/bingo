function newGame() {
  //get input if needbe to assign these variables
  //start game
  //if current size == past size, no need to call makeBoard();
  var size = 3;
  var sizesq = size * size;
  var phrases_file = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  fillBoard();

  function fillBoard(){
    if (document.getElementsByClassName('button-square').length !== sizesq){
      createSquares();
    } else {
      getNewPhrases();
    }
  }

  function mark(){
    alert('HOTDOG!');
  }

  function createSquares() {
    var phrases = [...getIndexesRandom()];

    for (var x = 0; x < sizesq; x++){
        var button     = document.createElement('button');
        button.className = 'button-square';
        button.id = x;
        button.addEventListener('click', mark(), false);
        button.innerHTML = phrases_file[phrases[x]];
        document.getElementById('firstboard').appendChild(button);
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
        document.getElementById(i).innerHTML = phrases_file[phrases[i]];
        //also set all squares to unmarked
      }
    }


  function bingoCheck() {

  }


  function gameWon() {
  
  }

  function drawBingo() {

  }
}
