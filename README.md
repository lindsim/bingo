# bingo
Lifetime/Made For TV Movie bingo game I created for my sister, the inventor of this game. 

I spent some time thinking about the best way to determine when bingo occurs. First, here's a little background information on this game and bingo game play in general: 
For this game, a player will be able to choose from a 3x3 grid, a 4x4 grid, and a 5x5 bingo gameboard. The <em>size</em> variable will indicate the number of rows and columns, meaning each bingo gameboard has <em>size^2</em> bingo squares. 

Each bingo square is a button. Each square can be marked or unmarked (if marked === true, the player has clicked the square to indicate the phrase has occured). The square button's innerHTML value is the phrase that needs to occur in the movie for the player to mark the square. Squares must be marked to be eligible to be part of a bingo; when a bingo occurs, the game is over and the player has won. The idea is that many people play at the same time so only the first player with a bingo wins. 

In most bingo games, getting one column or one row filled with marked squares is a bingo, meaning each bingo gameboard has <em>size * 2</em> bingo possibilities. Diagonal lines are also bingos; each grid has 2 diagonals regardless of size, which means the total bingo possibilities are <em>size * 2 + 2</em> (assuming that a gameboard must be a square and must have a <em>size</em> > 1). 




 I spent some of time thinking about the best way to determine when bingo occurs. Each square has an id value from 0 to <em>size^2 - 1</em>. Square 0 would be in the upper left corner; square 2 would be in the upper right corner. I considered a few different ways to track bingos and decided to keep a list of the unmarked squares. I will remove the id of a button from unmarked once it is marked then either: <br>
 A. replace it in the possible bingos list of lists with 'true.' If all of the possible bingos are true within a sublist, a bingo has occured and the game is over.  <br>
 B. add the marked square's id to a set and compare the marked square set to possible bingo set. If the bingo set is within the marked set, bingo has occured. <br>



