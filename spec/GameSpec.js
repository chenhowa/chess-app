

import { Game } from "../game-model/game";
import { GamePiece } from "../pieces-model/game-piece";
import { Board } from "../board-model/board";
import { PieceCodes } from "../pieces-model/piece-codes";
import { Square } from "../board-model/square";

var _ = require('underscore');

describe( "Game", function() {


    it( "Simple constructed game has expected attributes", function() {
        var pcs = new Array()
        pcs.push(GamePiece.buildPawn(0, true, new Square(0, 0) ) );
        pcs.push(GamePiece.buildPawn(1, false, new Square( 1, 1) ) );

        var b = new Board(2, 2);

        var game = new Game(pcs, b);

        expect( _.isEqual(b, game.board) ).toBe(true, "board NOT equal");
        expect( _.isEqual(pcs, game.pieces) ).toBe(true, "pieces NOT equal"); 
        expect( game.isBlackMove ).toBe(false, "black NOT to move");
        expect( game.captured.length ).toBe(game.pieces.length, "captured length is wrong");

        var expectFalse = function( val ) { expect(val).toBe(false, "value not false") }
        _.each( game.captured, expectFalse);
    });

    it( "Simple constructed game has synced pieces and board", function() {
        var pcs = new Array()
        pcs.push(GamePiece.buildPawn(0, true, new Square(0, 1) ) );
        pcs.push(GamePiece.buildPawn(1, false, new Square( 1, 0) ) );

        var b = new Board(2, 2);

        var game = new Game(pcs, b);

        var pcs = game.pieces
        var b = game.board

        _.each( pcs, (piece) => {
            expect( b.which_piece(piece.square) ).toBe(piece.id, piece.id.toString() + 
                " was not synced")
        });
    
    
    });

    var g;

    beforeEach( function() {
        g = Game.testGame()

    });


    it( "initial state conforms to rules of chess", function() {
        expect( g.isBlackMove ).toBeFalsy();
        expect( g.captured.length ).toEqual( g.pieces.length );

    });


});
