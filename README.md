# bingo
Lifetime/Made For TV Movie bingo game I created for my sister, the inventor of this game. 

I spent some time thinking about the best way to determine when bingo occurs. First, here's a little background information on this game and bingo game play in general: 
For this game, a player will be able to choose from a 3x3 grid, a 4x4 grid, and a 5x5 bingo gameboard. The <em>size</em> variable will indicate the number of rows and columns, meaning each bingo gameboard has <em>size^2</em> bingo squares. 

each bingo square is represented as an object. Each square has the properties of mark (if mark === true, the player has clicked the square to indicade the phrase has occured), phrase (what needs to occur in the movie for that square to be marked), and location. Squares must be marked to be eligible to be part of a bingo; when a bingo occurs, the game is over and the player has won. The idea is that many people play at the same time so only the first player with a bingo wins. 

In most bingo games, getting one column or one row filled with marked squares is a bingo, meaning each bingo gameboard has <em>size * 2</em> bingo possibilities. Diagonal lines are also bingos; each grid has 2 diagonals regardless of size, which means the total bingo possibilities are <em>size * 2 + 2</em> (assuming that a gameboard must be a square and must have a <em>size</em> > 1). 




 I spent some of time thinking about the best way to determine when bingo occurs. I thought of two ways to determine the location of a bingo square: 
 A. Give each square a column value. For a 3x3 gameboard, the rows would be from 0 to 2 as would the columns. The (0,0) square would be in the upper left corner; (2, 0) would be in the upper right corner.
 B. Give each square a value from 0 to <em>size^2 - 1</em> . Square 0 would be in the upper left corner; square 2 would be in the upper right corner. 

I considered a few different ways to think about the bingos. 
A. 

To start, let's consider the bingos that are not diagonal. 



A.
row 0 = bingo
row 1 = bingo
row 2 = bingo

col 0 = bingo
col 1 = bingo
col 2 = bingo


B. 
0, 1, 2 =  bingo
3, 4, 5 = bingo
6, 7, 8 = bingo

0, 3, 6 = bingo
1, 4, 7 = bingo
2, 5, 8 = bingo 







