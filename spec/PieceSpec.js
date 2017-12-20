import { Piece } from "../pieces-model/piece";
import { Square } from "../board-model/square";

describe( "Piece", function() {
    var sq;
    var p;

    beforeEach( function () {
        sq = new Square(3, 4);
        p = new Piece(sq, true); 
    });

    it( "has correct square and color values", function() {
        expect(p.rank).toEqual(3);
        expect(p.file).toEqual(4);
        expect(p.isBlack).toBeTruthy();
    });

    it( "can correctly have its square and color values changed", function() {
        p.rank = 10;
        p.file = 20;
        p.isBlack = false;

        expect(p.rank).toEqual(10);
        expect(p.file).toEqual(20);
        expect(p.isBlack).toBeFalsy();
    });

    it( "can correctly change position to a new square", function() {
        sq.rank = 100;
        sq.file = 200;
        p.move(sq);

        expect(p.rank).toEqual(100);
        expect(p.file).toEqual(200);
    });

    it( "correctly finds no moves, as a generic Piece", function() {
        var moves = p.find_moves();
        expect(moves.length).toEqual(0);
        
    });


});
