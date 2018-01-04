/* Howard Chen
 * bishop.js
 * Description: Specialization of the Piece class to a Bishop
 * Created on 1-2-2018
 * Last edited on 1-2-2018
 *
 *
 */

import { Piece } from "./piece";
import { Square } from "../board-model/square";

class Bishop extends Piece {
    constructor(square, bool_color) {
        super(square, bool_color)

    }

    find_moves(ranks, files) {
        var squares = new Array();

        var rank = this._square.rank
        var file = this._square.file

        var r_count = 0

        // check the two squares on the rank above the bishop. If that is still on the board,
        // it is a move. Simultaneously check the rank below the bishop.
        // If that is still on the board, it is a move. Then increment the rank
        // counter.
        while( (rank + r_count) < ranks || (rank - r_count) > 0 ) {
            r_count++;

            //create the array of squares to consider
            var possible = new Array();
            possible.push( new Square(rank + r_count, file + r_count) );
            possible.push( new Square(rank + r_count, file - r_count) );
            possible.push( new Square(rank - r_count, file + r_count) );
            possible.push( new Square(rank - r_count, file - r_count) );

            //if a square respects the board boundaries, it is a valid move
            possible.forEach( (sq) => {
                var respects_upper = sq.rank < ranks && sq.file < files;
                var respects_lower = sq.rank >= 0 && sq.file >= 0;
                if( respects_upper && respects_lower ) {
                    squares.push( sq );
                }
            } ));
        }

        return squares;

    }



}
