function newGame() {
  //get input if needbe to assign these variables
  //start game
  //if current size == past size, no need to call makeBoard();

  var size = 3;
  var sizesq = size * size;
  var phrases = ["dog", "cat", "fish", "pig", "turtle", "goblin", "turkey", "child", "gecko"];
  fillBoard();

  function fillBoard(){
    if (document.getElementsByClassName('button-square').length !== sizesq){
      createSquares();
    } else {
      newPhrases();
    }
  }

  function createSquares() {
    for (var x = 0; x < sizesq; x++){
        var button     = document.createElement('button');
        button.className = 'button-square';
        button.id = x;
        button.innerHTML = phrases[x];
        document.getElementById('firstboard').appendChild(button);
    }
    
  }


  function newPhrases() {
    for (var i = 0; i < sizesq; i++){
      document.getElementById(i).innerHTML = phrases[8 - i];
    }
    //from firebase - for not use others
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
    // 0 -- is 1? no. is 3? no. 
  }


function gameOverState() {
  
}

function drawBingo() {

}
}
