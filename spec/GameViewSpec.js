import { GameView } from "../view/game-view.js";

var MAHOGANY = function () { return 1 };
var REDWOOD = function () { return 2 };

var CLASSIC = function () { return 20 };
var GERMAN = function () { return 21 };

var METAL = function () { return 30 };
var WOOD = function() { return 31 };

describe ( "GameView", function() {
    var gv;
    
    beforeEach(function() {
        gv = new GameView( MAHOGANY, GERMAN, METAL );
    }); 


    it( "initialized values are correct", function() {
        expect(gv.color_scheme).toEqual( MAHOGANY() );
        expect(gv.piece_scheme).toEqual( GERMAN() );
        expect(gv.board_scheme).toEqual( METAL() );
    });

    it ( "setters work correctly", function() {
        gv.color_scheme = REDWOOD;
        expect(gv.color_scheme).toEqual( REDWOOD() );

        gv.piece_scheme = CLASSIC;
        expect(gv.piece_scheme).toEqual( CLASSIC() );
        
        gv.board_scheme = WOOD;
        expect( gv.board_scheme ).toEqual( WOOD() );
    });


});
