/* Howard Chen
 * pawn.js
 * Description: Child of the Piece class. Implements pawn behaviors.
 *      Overrides find_moves 
 * Created on 12-18-2017
 * Last edited on 12-18-2017
 *
 * A pawn is actually a special case because it does not capture the way it moves, and
 * because it can queen. But a pawn should not know whether nearby squares are occupied.
 * So it is up to the board to tell the pawn about nearby occupied squares!
 */


import { Piece } from "./piece";
import { Square } from "../board-model/square";

class Pawn extends Piece {
    constructor (square, bool_color) {
        super( square, bool_color )
    }
    find_moves () {
        var moves = new Array()
        moves.push( new Square(this._square.rank + 1, this._square.file) )
        if( this._square.rank === 2 ) {
            moves.push( new Square(this._square.rank + 2, this._square.file) ) 
        }

        return moves
    }
}

export { Pawn }
