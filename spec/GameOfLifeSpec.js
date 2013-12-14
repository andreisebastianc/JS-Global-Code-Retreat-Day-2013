describe("Game of life", function() {
    describe("World", function(){
        it("can be created", function() {
            expect(function() { new World([]); }).not.toThrow();
        });

        it("can evolve", function () {
            var world = new World([]);

            expect(function () { world.tick() }).not.toThrow();
        });

        it("represents cells as alive or dead", function (){
            var world = new World([true, false]);
            expect(world.cells[0].isAlive()).toEqual(true);
            expect(world.cells[1].isAlive()).toEqual(false);
        });
    });

    describe("Cell", function () {
        var cell;

        beforeEach(function () {
            cell = new Cell(true);
        });

        it("has neighbors", function () {

            expect(cell.neighbors).not.toBe(undefined);
        });

        it("allows neighbors to be set", function (){
            cell.addNeighbors(new Cell(true));
            expect(cell.neighbors.length).toEqual(1);
        });

        it("can be a zombie", function () {
            cell = new Cell(3);

            expect(cell.isAlive()).toEqual(true);
            expect(!cell.isAlive()).toEqual(false);
        });

        describe("updates its state according to its neighbors", function(){
            it("dies if it's living and has fewer than two neighbors", function(){
                cell.addNeighbors([
                    new Cell(true)
                ]);
                cell.update();

                expect(cell.isAlive()).toEqual(false);
            });

            it("dies if it's living and has more than three live neighbors", function () {
                cell.addNeighbors([new Cell(true), new Cell(true), new Cell(true), new Cell(true)]);
                cell.update();

                expect(cell.isAlive()).toEqual(false);
            });

            it("comes to life if it's dead and has three live neighbors", function () {
                var deadCell = new Cell(false);
                deadCell.addNeighbors([
                    new Cell(true),
                    new Cell(true),
                    new Cell(true),
                    new Cell(false)
                ]);
            });

        });

        describe("neighbors", function () {
            it("is a neighbor for its neighbors", function() {
                var cell = new Cell(true),
                    otherCell = new Cell(true);

                cell.addNeighbors([otherCell]);
                expect(otherCell.neighbors[0]).toEqual(cell);
            });
        });
    });
});
