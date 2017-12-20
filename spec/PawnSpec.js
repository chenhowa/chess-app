import { Pawn } from "../pieces-model/pawn";
import { Square } from "../board-model/square";

describe("Pawn", function() {
    var pa;
    var sq;

    beforeEach(function() {
        sq = new Square(3, 4);
        pa = new Pawn(sq, true);
    });

    it("When not on 2nd rank, pawn generates correct moves", function() {
        var moves = pa.find_moves();
        expect(moves.length).toEqual(1);
        var m1 = moves[0];
        expect(m1.rank).toEqual(4);
        expect(m1.file).toEqual(4);
    });

    it("When on 2nd rank, pawn generates correct moves", function() {
        pa.rank = 2;
        var moves = pa.find_moves();
        expect(moves.length).toEqual(2);

        var m1 = moves[0];  //check first move
        expect(m1.rank).toEqual(3);
        expect(m1.file).toEqual(4);

        var m2 = moves[1]; //check second move
        expect(m2.rank).toEqual(4);
        expect(m2.file).toEqual(4);
    });


});
