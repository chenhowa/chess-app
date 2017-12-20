/* Howard Chen
 * square.js
 * Description: implements a Square class for more concise code
 * Created on 12-18-2017
 * Last edited on 12-18-217
 *
 *
 */

class Square {
    constructor (rank, file) {
        this._rank = rank
        this._file = file
    }
    set rank (rank) { this._rank = rank }
    get rank () { return this._rank }
    set file (file) { this._file = file }
    get file () { return this._file }
}

export { Square }
