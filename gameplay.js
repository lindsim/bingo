function newGame(first) {
  //get input if needbe to assign these variables
  //when add size options: if current size == past size, no need to call makeBoard();
  var size = 3;
  var past_size = 3;
  var boardmodel= [];
  var phrases_file = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  if (first == true){
    createSquares();
    clearBoardModel();
  } else {
      getNewPhrases();
      clearBoardModel(); 
  }
  
        
  
  function checkBingo(row, col){
    if (checkRow() === true){
      gameWon();
      return;
    } else if (checkCol() === true){
      gameWon();
      return;
    } else if (checkDiagOne() === true){
      gameWon();
      return;
    } else if (checkDiagTwo()===true){
      gameWon();
      return;
    } else {
      return;
    }

    function checkRow(){
      var x = 0;
      while (x < size){
        if (boardmodel[row][x] != 1){
          return false;
        } else {
          x++;
        }
      }
      return true;
    }

    function checkCol(){
      var x = 0;
      while (x < size) {
        if (boardmodel[x][col] != 1){
          return false;
        } else {
          x++;
        }
      }
      return true;
    }

    function checkDiagOne() {
      var x = 0;
      while (x < size) {
        if (boardmodel[x][x] != 1){
          return false;
        } else {
          x++;
        }
      }
      return true;
    }

    function checkDiagTwo() {
      var x = 0;
      while (x < size) {
        if (boardmodel[x][size - x - 1] != 1){
          return false;
        } else {
          x++;
        }
      }
      return true;
    }
  }

  function mark(e){
    var cur_btn = document.getElementById(e.target.id)
    var row = Math.floor(cur_btn.id/size);
    var col = Math.floor(cur_btn.id % size);
    if (cur_btn.className === 'marked'){
      cur_btn.className = 'button-square';
      boardmodel[row][col]= 0; 
    } else {
      cur_btn.className = 'marked';
      boardmodel[row][col] = 1;
      checkBingo(row, col);
    }
  }
  

  function createSquares() {
    var phrases = [...getIndexesRandom()];
      for (var x = 0; x < (size * size); x++){
        var button = document.createElement('button');
        button.className = 'button-square';
        button.id = x;
        button.textContent = phrases_file[x];
        document.getElementById('firstboard').appendChild(button);
        button.onclick = mark;
        //remember, no parens beacause assigning function NOT calling it
    }
  }

  function clearBoardModel(){
    boardmodel = [];
    for (var y = 0; y < size; y++){
      var row_col = [];
      for (var x = 0; x < size; x++){
        row_col.push(0);
      }
      boardmodel.push(row_col);
    }
  }
  



  function getNewPhrases() {
    var phrases = [...getIndexesRandom()];
      for (var i = 0; i < (size * size); i++){
        document.getElementById(i).textContent = phrases_file[phrases[i]];
        document.getElementById(i).className = 'button-square';
      }
    }

  function gameWon() {
    alert("BINGO!!!!!!!!!!!! You won!");
  }
}
