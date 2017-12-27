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
var build_piece = function(piece_type, isBlack) {
    var sq = new Square(-1, -1);
    if( piece_type == PieceCodes.PAWN_CODE() ) {
       return new Pawn(sq, isBlack);
    } else {
        //perhaps this should be overriden to throw. A generic piece is meaningless
        return new Piece(sq, isBlack);
    }
    
};

class GamePiece {
    constructor (piece_type, id, isBlack) {
        this._piece_type = piece_type;
        this._piece = build_piece(piece_type, isBlack);
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

    static buildPawn(id, isBlack) {
        return new GamePiece(PieceCodes.PAWN, id, isBlack);
    }

}

export { GamePiece }
