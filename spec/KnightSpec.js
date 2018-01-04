import { Knight } from "../pieces-model/knight.js";
import { Square } from "../board-model/square.js";


describe( "Knight", function() {
    var n;
    var sq;

    beforeEach( function() {
        sq = new Square(3, 4);
        n = new Knight(sq, true); 

    });


    it( "generates correct move set", function() {
        var moves = n.find_moves();
        expect(moves.includes(new Square(5, 5))).toBeTruthy();
        expect(moves.includes(new Square(5, 3))).toBeTruthy();

        expect(moves.includes(new Square(1, 5))).toBeTruthy();
        expect(moves.includes(new Square(1, 3))).toBeTruthy();

        expect(moves.includes(new Square(4, 6))).toBeTruthy();
        expect(moves.includes(new Square(2, 6))).toBeTruthy();

        expect(moves.includes(new Square(4, 2))).toBeTruthy();
        expect(moves.includes(new Square(2, 2))).toBeTruthy();

        //At this point, I realize that for the bishop, rook, and queen,
        //the number of moves available depends on the size of the board
        //they are on. So it is a bad idea to use the find_moves method
        //for finding standard moves in the game.
    });


});
