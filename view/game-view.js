/* Howard Chen
 * game-view.js
 * Description: class that handles rendering for the game (i.e. the board, the pieces,
 *      etc). It does not modify them, it simply renders them. This is part of keeping
 *      the view separate from the models, although it would be simpler to let the
 *      models know how to render themselves. Perhaps I could experiment with that
 *      later.
 * Created 12-25-2017
 * Last edited 12-25-2017
 *
 *
 *
 */

class GameView {
    constructor (color_scheme, piece_scheme, board_scheme) {
        this._color_scheme = color_scheme()
        this._piece_scheme = piece_scheme()
        this._board_scheme = board_scheme()
    }

    set color_scheme (color_scheme) { this._color_scheme = color_scheme() }
    get color_scheme () { return this._color_scheme }
    set piece_scheme (piece_scheme) { this._piece_scheme = piece_scheme() }
    get piece_scheme () { return this._piece_scheme }
    set board_scheme (board_scheme) { this._board_scheme = board_scheme() }
    get board_scheme () { return this._board_scheme }

}

export { GameView }
