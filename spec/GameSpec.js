

import { Game } from "../game-model/game";
import { GamePiece } from "../pieces-model/game-piece";
import { Board } from "../board-model/board";
import * as PieceCodes from "../pieces-model/piece-codes";

describe( "Game", function() {
    var g;
    var pcs;
    var b;

    beforeEach( function() {
        var ranks = 8;
        var files = 8;
        b = new Board(ranks, files);
        pcs = new Array();

        for( let i = 0; i < 5; i++) {
            var isBlack = (i % 2 === 0) ? true : false;
            pcs.push( new GamePiece( PieceCodes.PAWN_CODE(), isBlack) );
        }

        //put pieces on starting squares


        //initialize the game
        g = new Game( pcs, b);

    });


    it( "initial state conforms to rules of chess", function() {
        expect( g.isBlackMove ).toBeFalsy();
        expect( g.captured.length ).toEqual( g.pieces.length );

    });


});
