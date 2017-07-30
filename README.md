# bingo
Lifetime/Made For TV Movie bingo game I created for my sister, the inventor of this game. 

I spent some time thinking about the best way to determine when bingo occurs. First, here's a little background information on this game and bingo game play in general: 
For this game, a player will be able to choose from a 3x3 grid, a 4x4 grid, and a 5x5 bingo gameboard. The <em>size</em> variable will indicate the number of rows and columns, meaning each bingo gameboard has <em>size^2</em> bingo squares. 

Each bingo square is a button. Each square can be marked or unmarked (if marked === true, the player has clicked the square to indicate the phrase has occured). The square button's innerHTML value is what needs to occur in the movie for the player to mark the square. Squares must be marked to be eligible to be part of a bingo; when a bingo occurs, the game is over and the player has won. The idea is that many people play at the same time so only the first player with a bingo wins. 

In most bingo games, getting one column or one row filled with marked squares is a bingo, meaning each bingo gameboard has <em>size * 2</em> bingo possibilities. Diagonal lines are also bingos; each grid has 2 diagonals regardless of size (assuming that a gameboard must be a square and must have a <em>size</em> > 1), which means the total bingo possibilities are <em>size * 2 + 2</em> . 


 I considered a few different ways to track bingos: <br>
 A. Use an array of arrays. 1 means the square is marked; 0 means the square is not marked. Check the arrays for matches in columns, in rows, and diagonals. This is the most obvious way to go check for bingos and whiile I implemented other solutions this is what I will stay with and try to improve. 
 B. Create an array of all possible bingos with each bingo as a set. Add the marked square's id to a set and compare the marked square set to the possible bingo array of sets. If the marked set is a super set of a possible bingo set, bingo has occured. I implemented this but Javascript doesn't have sets so it seemed superfluous to use sets. <br>
 C. Build a tree structure where one enters at an index value and goes to the various branches on the tree to check if values needed for a bingo have been marked. The major disadvantage is that the tree structure would have to be overly complex unless I use the middle square as a free space each time and navigate from there. Even then, however, it would need muliple main nodes because half the bingos won't use the middle square. <br>
D. Make an array of what is needed for bingo to occur based on which squares have already been marked. I'm not sure what the best way would be to implement this as it seems <br>

I also spent some time thinking about how to best choose phrases at random, or nearly random, from the different options available. One way is to choose random ints from a range of ints and add them to what will essentially be the list of keys (to use with the values of the phrases). Another would be to shuffle the phrases (using Durstenfeld's method) then return index 0 to sizesq phrases each time. <br>

