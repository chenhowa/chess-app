/* Howard Chen
 * board.js
 * Description: Model for the chess-board itself.
 * Created on 12-19-2017
 * Last modified on 12-19-2017
 *
 *
 */

import { BoardSquare } from "./board-square";
import { Square } from "./square";
import { OccupyCodes } from "./occupy-codes";

var createCoord = function( rank, file ) {
    return String.fromCharCode( file + 0x41 ).toLowerCase() + (rank + 1).toString();
}


class Board {
    constructor (ranks, files) {
        this._ranks = ranks
        this._files = files
        
        //Sets up an board full of unoccupied squares, but with correct coords
        var squares = [];
        for( let i = 0; i < this._ranks; i++) {
            var row = [];
            for( let j = 0; j < this._files; j++) {
                var coord = createCoord(i, j);
                var sq = new BoardSquare(OccupyCodes.NONE, -1, coord);
                row.push(sq);
            }

            squares.push(row);
        }
        this._squares = squares
       
    }
    occupy (square, occ_code, piece_id) {
        this._squares[square.rank][square.file].occ = occ_code;
        this._squares[square.rank][square.file].piece_id = piece_id;
    }
    clear (square) {
        this._squares[square.rank][square.file].occ = OccupyCodes.NONE;
        this._squares[square.rank][square.file].piece_id = -1;
    }
    clearBoard() {
        for( let i = 0; i < this._ranks; i++) {
            for( let j =0; j < this._files; j++ ) {
                var sq = new Square(i, j);
                this.clear(sq);
            }
        }

    }
    isOccupied(square) {
        return this._squares[square.rank][square.file].occ !== OccupyCodes.NONE;
    }
    isOccupiedWhite(square) {
        return this._squares[square.rank][square.file].occ === OccupyCodes.WHITE;
    }
    isOccupiedBlack(square) {
        return this._squares[square.rank][square.file].occ === OccupyCodes.BLACK;
    }
    which_piece(square) {
        return this._squares[square.rank][square.file].piece_id;
    }
    which_coord(square) {
        return this._squares[square.rank][square.file].coord;
    }

    get files() { return this._files }
    get ranks() {return this._ranks }
}

export { Board, createCoord }
