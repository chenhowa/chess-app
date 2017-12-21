
#Simple Chess Application
As the chess world has entered the 21st century, many enthusiasts have turned to the internet and programming to expand the popularity of the game. Any cursory examination of chessbase.com or the Internet Chess Club will show a panoply of products that harness software to make chess easy to play, watch, and learn. However, many of these products are not user-friendly. The goal of this project is to develop a simple, user-friendly chess board with an API that makes it easy to embed in other projects.

##Requirements: External Definition
Someone using the application should be able to play an entire chess game using this board, recording every move of the chess game. It should also be simple to play through the game and analyze variations in an 'Examine' mode.

Using the chessboard would therefore have the following characteristics:

* The basic piece-movement rules are followed.
* Check and checkmate are acknowledged with sounds and the limitation of piece-movement.
* Only the pieces of the player-to-move can be actively clicked.
* Player clocks will track each player's time.
* Players can play against a computer.

In any mode, all moves played should be recorded, and the record should be editable to a certain extent (metadata about the players as well as variation promotion, demotion, deletion, and commenting). A player should be able to save this record.


##Requirements: Internal Definition
Assuming this application follows the MVC paradigm, the controller should keep track of who is to move (and their time remaining), and based on that the view will determine which pieces of the board are moveable.

Since we want to minimize coupling, the board model itself should maintain a record of which squares are occupied, and controller should be able to use this record to find the corresponding piece.

Since multiple pieces may occupy the same square (since pieces will be moving from place to place), the controller must maintain a list of captured pieces and uncaptured pieces, so that only the captured pieces are rendered in the view. Therefore each square will only be occupied by just 1 uncaptured piece.

To allow the Player to save and play through games and develop variations of these games, a text file (with an analogue in memory) will store a multi-tree, where each node contains the move, uncaptured pieces, and variation priority. This will likely involve some algorithm to propagate and read variation priority (it isn't clear how best to store variations to ensure that promotion/demotion is simple).

## Nonfunctional Requirements
The main issues are space and time. The Player should never experience visual lag, so it is acceptable to sacrifice space for time (using caching). However, the application is intended to run in the browser, where memory may be limited, so space is limited.

For now, we'll use the following numbers, although these may be updated later:

* Maximum space usage of 2 MB.
* Maximum lag of 0.1 seconds.

## Use Cases

1. Player moves piece to unoccupied square.
    1. Player clicks on piece.
    2. Valid squares are highlighted.
    3. Player clicks on an unoccupied valid square.
    4. Piece moves to new valid square.
    5. Variation/position is saved.
2. Player moves piece to occupied square.
    1. Player clicks on piece.
    2. Valid squares are highlighted.
    3. Player clicks on occupied valid square.
    4. Piece moves to square and replaces original piece.
    5. Variation/Position is saved.
3. Player is in check.
    1. Player can only move king.
4. Player is in checkmate.
    1. Game ends.
    2. Winner is declared.
5. Player runs out of time.
    1. Game ends.
    2. Winner is declared.
6. Player promotes a pawn.
    1. Player clicks pawn.
    2. Valid squares are highlighted.
    3. Player clicks a promotion square.
    4. Player chooses what piece to promote to.
    5. Pawn is replaced by the chosen piece.
7. Player uses a pawn to capture.
    1. Player clicks pawn.
    2. Valid squares are highlighted.
    3. Player clicks on a capture square.
    4. Piece moves to capture square and replaces original piece.
8. Player goes to previous (or future) position.
    1. Player clicks a move in the variation tree.
    2. The corresponding position is found in memory and loaded onto the screen.
    3. Player can play additional moves now or select a new position.
9. Player creates a new variation.
    1. Player plays a move that is different from the next move in the variation tree.
    2. Player is prompted to create a new variation, new mainline, or cancel.
    3. If player creates new variation or mainline, variation tree is updated in memory and in UI.
10. Player promotes, demotes, or deletes a variation.
    1. Player right-clicks a move in the UI tree and selects promote/demote/delete variation.
    2. The corresponding variation is found, and is promoted/demoted/deleted.
11. Player saves a game to file.
    1. In-memory tree is written to file.
12. Player opens a game from file.
    1. File tree is used to generate an in-memory tree
    2. The UI tree is updated.
    3. The position starts at move 1, white to move.
