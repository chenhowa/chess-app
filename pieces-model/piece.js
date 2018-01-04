/* Howard Chen
 * pieces.js
 * Description: Base class for hierarchy of chess pieces.
 *      A few functions must be overridden in child classes.
 * Created on 12-18-2017
 * Last edited on 12-18-2017.
 *
 */

import { Square } from "../board-model/square.js";

class Piece {
    constructor ( square, bool_color ) {
        this._square = square //square object encapsulating other information
        this._isBlack = bool_color  //bool representing White or Black team
    }
    move ( new_square ) {
        this._square = new_square;
    }
    find_moves (ranks, files) {
        //This needs to be overridden in inheriting classes. Each
        //child class should calculate its own set of possible moves.
        return new Array()
    }

    set rank (rank) { this._square.rank = rank}
    get rank () { return this._square.rank }
    set file (file) { this._square.file = file }
    get file () { return this._square.file }
    set isBlack (bool_color) { this._isBlack = bool_color }
    get isBlack () { return this._isBlack }
}


export { Piece };
