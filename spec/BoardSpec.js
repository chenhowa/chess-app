import { Board, createCoord } from "../board-model/board";
import { Square } from "../board-model/square";

describe ( "Board", function() {
    
    var b;

    it( "createCoord works", function() {
        expect(createCoord( 0, 0) ).toEqual( "a1");
        expect(createCoord(7,7)).toEqual( "h8" );
        expect(createCoord(3,4)).toEqual("e4");
        expect(createCoord(2,6)).toEqual("g3");
    });

    beforeEach(function() {
        b = new Board(4, 5);

    })


    it( "basic dimensions are correct", function () {
        expect(b.ranks).toEqual(4);
        expect(b.files).toEqual(5);
    });

    it( "basic nonoccupation is detected", function () {
        for (let i = 0; i < b.ranks; i++) {
            for(let j = 0; j < b.files; j++) {
                var sq = new Square(i, j); 
                expect( b.isOccupied(sq) ).toBeFalsy();
                expect( b.isOccupiedWhite(sq) ).toBeFalsy();
                expect( b.isOccupiedBlack(sq) ).toBeFalsy();
            }
        }


    });

    it( "basic occupation is detected", function () {
        var sq = new Square(0, 0);
        
        b.occupy(sq, 1, -1);
        expect(b.isOccupied(sq)).toBeTruthy();

        b.occupy(sq, 0, -1);
        expect(b.isOccupied(sq)).toBeFalsy();

        b.occupy(sq, 2, -1);
        expect(b.isOccupied(sq)).toBeTruthy();

        for (let i = 0; i < b.ranks; i++) {
            for(let j = 0; j < b.files; j++) {
                var sq = new Square(i, j);
                b.occupy(sq, 1, -1);
                expect(b.isOccupied(sq) ).toBeTruthy();
                b.occupy(sq, 2, -1);
                expect(b.isOccupied(sq) ).toBeTruthy();
            }
        }
    });

    it( "White and Black occupation is detected", function() {
        var wsq = new Square(1, 1);
        var bsq = new Square(2, 2);

        b.occupy(wsq, 1, -1);
        expect(b.isOccupiedWhite(wsq)).toBeTruthy();
        expect(b.isOccupiedBlack(wsq)).toBeFalsy();

        b.occupy(bsq, 2, -1);
        expect(b.isOccupiedWhite(bsq)).toBeFalsy();
        expect(b.isOccupiedBlack(bsq)).toBeTruthy();
        
    });

    it ( "square clearance is detected", function() {
        for (let i = 0; i < b.ranks; i++) {
            for(let j = 0; j < b.files; j++) {
                var sq = new Square(i, j);
                b.occupy(sq, 1, -1);
                b.clear(sq);
                expect(b.isOccupied(sq)).toBeFalsy();
                expect(b.isOccupiedWhite(sq)).toBeFalsy();
                expect(b.isOccupiedBlack(sq)).toBeFalsy();
            }
        }

    });

    it( "occupying piece is correctly detected", function() {
        for(let i = 0; i < b.ranks; i++) {
            for(let j = 0; j < b.files; j++) {
                var sq = new Square(i, j)
                var id = i * j;
                b.occupy(sq, 0, id);
                expect(b.which_piece(sq) ).toEqual(id);
            }
        }

    });


    it( "coordinates are correctly generated", function() {
        for(let i = 0; i < b.ranks; i++) {
            for(let j = 0; j < b.files; j++) {
                var sq = new Square(i, j);
                var coord = createCoord(i, j);
                expect(b.which_coord(sq)).toEqual(coord);
            }
        }

    });

});
