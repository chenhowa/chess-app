
import { BoardSquare } from "../board-model/board-square";


describe( "BoardSquare", function() {
    var bsq;

    beforeEach(function() {
        bsq = new BoardSquare(0, 5, "a8"); 
    });

    it( "correctly returns attributes", function() {
        expect(bsq.occ).toEqual(0);
        expect(bsq.piece_id).toEqual(5);
        expect(bsq.coord).toEqual("a8");
    });

    it( "correctly allows attributes to be set", function() {
        bsq.occ = 1;
        expect(bsq.occ).toEqual(1);

        bsq.piece_id = 22;
        expect(bsq.piece_id).toEqual(22);

        //coord cannot be set
    });


});
