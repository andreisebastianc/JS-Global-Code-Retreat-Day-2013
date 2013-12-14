describe("Game of life", function() {
    describe("Cell", function () {
        var cell;
        it("it throws up on invalid state", function () {
            expect(function() { new Cell(); }).toThrow();
        });
        it("can be created alive", function () {
            expect(function() { new Cell(true); }).not.toThrow();
        });
        it("can be created dead", function () {
            expect(function() { new Cell(false); }).not.toThrow();
        });
        it("always has a valid state", function () {
            cell = new Cell(true);
            expect(cell.state).not.toBeUndefined();
        });
    });
    describe("World", function () {
        it("initializes with an empty list of cells", function () {
            var world = new World();
            expect(world.cells.length).toEqual(0);
        });
        describe("creation", function () {
            var world = new World();
            it("throws when creating with incorrect number of cells", function () {
                expect(world.create('test')).toThrow();
            });
            it("doesn't throw when creating with incorrect number of cells", function () {
                expect(world.create(1)).not.toThrow();
            });
        });
    });
});
