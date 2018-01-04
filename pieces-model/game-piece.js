/* Howard Chen
 * game-piece.js
 * Description: Decorates a Piece object with the information needed
 *      to be useful in a Game in interactions with the Board and View.
 * Created on 12-20-2018
 * Last edited on 12-20-2018
 */

import { Pawn } from "./pawn";
import { Piece } from "./piece";
import { Square } from "../board-model/square";
import { PieceCodes } from "./piece-codes";


//FIX!!! Add piece codes file for more flexibility and clearer semantics
var build_piece = function(piece_type, isBlack, sq) {
    if( piece_type === PieceCodes.PAWN ) {
       return new Pawn(sq, isBlack);
    } else {
        //perhaps this should be overriden to throw. A generic piece is meaningless
        return new Piece(sq, isBlack);
    }
    
};

class GamePiece {
    constructor (piece_type, id, isBlack, sq) {
        this._piece_type = piece_type;
        this._piece = build_piece(piece_type, isBlack, sq);
        this._id = id;
    }
    move (new_square) { this._piece.move(new_square) }
    
    get square() { return new Square(this.rank, this.file) }
    get moves () { return this._piece.find_moves() }
    get id () { return this._id }
    get piece_type () { return this._piece_type }
    get rank () { return this._piece.rank }
    get file () { return this._piece.file }
    get isBlack() { return this._piece.isBlack }

    static buildPawn(id, isBlack, sq) {
        return new GamePiece(PieceCodes.PAWN, id, isBlack, sq);
    }

    static testPieceSet() {
        //first adds 8 white pawns and 8 black pawns, and assumes a 8x8 board
        var pieces = new Array()
        for(let i = 0; i < 16; i++) {
            var id = i;
            var isBlack = (i % 2) == 0
            var sq;
            if( isBlack ) {
                sq = new Square(7, Math.floor(i / 2) ); 
            }
            else {
                sq = new Square(2, Math.floor(i / 2) );
            }
            var pawn = GamePiece.buildPawn(id, isBlack, sq)
            pieces.push(pawn);
        }

        return pieces
    }

}

export { GamePiece }
