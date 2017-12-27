/* Howard Chen
 * game.js
 * Description: Game class which has access to both the models (pieces, board, etc.)
 *      and the view (GameView class) and syncs them together while also managing
 *      the game's control-flow itself.
 * Created on 12-25-2017
 * Last edited on 12-27-2017
 *
 */

import { GamePiece } from "../pieces-model/game-piece";
import { Board } from "../board-model/board";
import { Square } from "../board-model/square";
import { BoardSquare } from "../board-model/board-square";
import { OccupyCodes } from "../board-model/occupy-codes";

class Game {
    constructor (starting_pieces, board) {
        this._isBlackMove = false;
        this._pieces = starting_pieces;
        this._board = board;
        this._captured = new Array();
        for (let i = 0; i < this._pieces.length; i++) {
            this._captured.push( false );
        }

        this.syncBoardToPieces();
    }        
        get board () { return this._board }
        get pieces () { return this._pieces }
        get isBlackmove () { return this._isBlackMove }
        get captured () { return this._captured }

        // This function iterates through the piece array and ensures
        // that the board has the same piece arrangement.
        syncBoardToPieces () {
            this._board.clearBoard();
            this._pieces.forEach(function(piece) {
                var occ_code;
                if(piece.isBlack) {
                    occ_code = OccupyCodes.black
                }
                else {
                    occ_code = OccupyCodes.white
                }
                board.occupy(piece.square, occ_code, piece.id); 

            });
        }


    //Makes game with standard board size and pieces
    static defaultGame() {
        var pieces = new Array();

        var board = new Board(8, 8);
        var game = new Game(pieces, board); 
    }

    static testGame() {
        var pieces = new Array();
        for( let i = 0; i < 16, i++ ) {
            var id = i;
            var isBlack = (i % 2) == 0;
            var piece = GamePiece.buildPawn(id, isBlack);
        }
        var board = new Board(8, 8);

        var game = new Game(pieces, board);
    }

    



}

export { Game }
