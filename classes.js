class Square {
    constructor(side, phrase, row, column) {
        this.side = side;
        this.phrase = phrase;
        this.stamped = false;
        this.row = row;
        this.column = column; 
  }
}


class Board {
    constructor(length, squares, color){
        this.length = length;
        this.squares = squares;
        this.color = color;
    }

    get totalSquares(){
        return this.length * this.length;
    }

    get length(){
        return this.length;
    }
}

class Player {
    constructor(name){
        this.name = name;
    }
}