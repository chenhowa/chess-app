/* Howard Chen
 * board-square.js
 * Description: A simple board square. It does not know its rank and file: that is the
 *      responsibility of the Board it is contained in. However, it does track
 *      its occupation status and its algebraic name.
 * Created on 12-20-2017
 * Last edited on 12-20-2017
 *
 *
 */

class BoardSquare {
    constructor ( occ_code, piece_id, coord ) {
        this._occ = occ_code
        this._piece_id = piece_id
        this._coord = coord
    }

    get occ () { return this._occ }
    set occ ( occ_code ) { this._occ = occ_code }
    get piece_id () { return this._piece_id }
    set piece_id (id) { this._piece_id = id }
    get coord () { return this._coord }
}

export { BoardSquare }
