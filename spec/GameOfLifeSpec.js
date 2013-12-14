describe("Game of life", function() {
    describe("Cell", function () {
        it('dies if it has fewer than three neighbors', function (){
            var cell = new Cell(true);
            cell.addNeighbors(
                new Cell(true)
            );
            cell.update();
            expect(cell.isAlive).toEqual(false);
        });
    });
});
