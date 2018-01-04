import { GamePiece } from "../pieces-model/game-piece";
import { Square } from "../board-model/square";
import { PieceCodes } from "../pieces-model/piece-codes";
import { ColorCodes } from "../pieces-model/color-codes";

describe( "GamePiece", function() {
    var wgp;
    var wsq;
    var bgp;
    var bsq;
    
    beforeEach( function() {
        wgp = new GamePiece(PieceCodes.PAWN, 10, ColorCodes.isWhite);
        wsq = new Square(2, 4);
        bgp = new GamePiece(PieceCodes.PAWN, 20, ColorCodes.isBlack);
        bsq = new Square(5, 6);

    });

    it( "returns the correct basic attributes", function() {
        expect(wgp.piece_type).toEqual(PieceCodes.PAWN);
        expect(bgp.piece_type).toEqual(PieceCodes.PAWN);

        expect(wgp.id).toEqual(10);
        expect(bgp.id).toEqual(20);

        expect(wgp.isBlack).toEqual(false);
        expect(bgp.isBlack).toEqual(true);
    });

    it( "returns the correct calculated and child attributes", function() {
        wgp.move(wsq);
        expect(wgp.square).toEqual(wsq);
        expect(wgp.rank).toEqual(2);
        expect(wgp.file).toEqual(4);

        bgp.move(bsq);
        expect(bgp.square).toEqual(bsq);
        expect(bgp.rank).toEqual(5);
        expect(bgp.file).toEqual(6);

        expect(wgp.moves.length).toEqual(2);
        expect(bgp.moves.length).toEqual(1);
    });

    it( "builds a pawn correctly", function() {
        var pawn = GamePiece.buildPawn(1, ColorCodes.isBlack);
        expect(pawn.piece_type).toEqual(PieceCodes.PAWN);
    });


});
