

import { Bishop } from "../pieces-model/bishop";
import { Square } from "../board-model/square";

var _ = require('underscore');


describe( "Bishop", function() {

    var b;
    var sq;

    beforeEach(function() {
        sq = new Square(2, 5)
        b = new Bishop(sq, true)

    });


    it( "finds correct squares on 8x8 board", function() {
        var correct = new Array()
        correct.push( new Square(3, 6) );
        correct.push( new Square(4, 7) );
        correct.push( new Square(3, 4) );
        correct.push( new Square(4, 3) );
        correct.push( new Square(5, 2) );
        correct.push( new Square(6, 1) );
        correct.push(new Square(7, 0) );
        correct.push( new Square(1, 6) );
        correct.push( new Square(0, 7) );
        correct.push( new Square(1, 4) );
        correct.push( new Square(0, 3) );

        var actual = b.find_moves(8, 8);

        expect( correct.length ).toEqual(actual.length)

        //A deep equality library would be more useful here.
        for(let i = 0; i < correct.length; i++) {
            var isEqual = function(sq) {
                return _.isEqual(correct[i], sq)
            }

            expect( _.some( actual, isEqual, false) ).toBeTruthy();
        }
    });


    it( "finds correct squares on a 0x0 board", function() {
        var correct = new Array();

        var actual = b.find_moves(0, 0);

        expect( correct.length).toEqual(actual.length);


    });


    it("finds correct squares on a 1x1 board", function() {
        b.move( new Square(0, 0) );
        var correct = new Array();
        var actual = b.find_moves(0, 0);

        expect(correct.length).toEqual(actual.length);

    });

    it("finds correct squares when it isn't on the board", function() {
       expect(false).toBeTruthy() 

    });



});
