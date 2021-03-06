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
        get isBlackMove () { return this._isBlackMove }
        get captured () { return this._captured }

        // This function iterates through the piece array and ensures
        // that the board has the same piece arrangement.
        syncBoardToPieces () {
            this._board.clearBoard();
            for( let i = 0; i < this._pieces.length; i++) {
                var occ_code;
                var piece = this._pieces[i];
                if(piece.isBlack) {
                    occ_code = OccupyCodes.BLACK
                } else {
                    occ_code = OccupyCodes.WHITE
                }

                this._board.occupy(piece.square, occ_code, piece.id);
            }
        }


    //Makes game with standard board size and pieces
    static defaultGame() {
    }

    static testGame() {
        var pieces = GamePiece.testPieceSet()
        var board = new Board(8, 8);
        var game = new Game(pieces, board);

        return game;
    }

    



}

export { Game }
