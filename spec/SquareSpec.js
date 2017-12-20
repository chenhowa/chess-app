import { Square } from "../board-model/square";

describe("Square", function() {
    var sq;

    beforeEach(function() {
        sq = new Square(3, 4);
    });

    it("should correctly return its rank and file", function() {
        expect(sq.rank).toEqual(3);
        expect(sq.file).toEqual(4);

    });

    it("should correctly allow its rank and file to change", function() {
        sq.rank = 10;
        expect(sq.rank).toEqual(10);

        sq.file = 20;
        expect(sq.file).toEqual(20);
    });




});
