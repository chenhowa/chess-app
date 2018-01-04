/* Howard Chen
 * knight.js
 * Description: Specialization of Piece class to a Knight
 * Created on 1-1-2018
 * Last edited on 1-1-2018
 *
 */


import { Piece } from "./piece.js";
import { Square } from "../board-model/square.js";

class Knight extends Piece {
    constructor(square, bool_color) {
        super(square, bool_color);
    }
    find_moves(ranks, files) {
        var squares = new Array()
        //push all possible moves of the knight.
        var up_rank = this._square.rank + 2;
        squares.push(new Square(up_rank, this._square.file + 1));
        squares.push(new Square(up_rank, this._square.file - 1));

        var down_rank = this._square.rank - 2;
        squares.push(new Square(down_rank, this._square.file + 1));
        squares.push(new Square(down_rank, this._square.file - 1));

        var right_file = this._square.file + 2;
        squares.push(new Square(this._square.rank + 1, right_file));
        squares.push(new Square(this._square.rank - 1, right_file));

        var left_file = this._square.file - 2;
        squares.push(new Square(this._square.rank + 1, left_file));
        squares.push(new Square(this._square.rank - 1, left_file));

        return squares;
    }

}

export { Knight }
