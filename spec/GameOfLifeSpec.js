describe("Game of life", function() {
  describe("Cell", function () {
    it('knows about its neighbours', function() {
      var cell = new Cell(true, []);
      expect(cell.neighbours).not.toBeUndefined();
    });
    
    describe('updates its state according to its neighbours', function(){
      it("dies when it has fewer than two living neighbours and is alive", function(){
        var cell = new Cell(true, [
          new Cell(false,[]),
          new Cell(false,[])
        ]);
        cell.update();
        expect(cell.isAlive).toEqual(false);
        
        var cell = new Cell(false, [
          new Cell(false,[]),
          new Cell(false,[])
        ]);
        cell.update();
        expect(cell.isAlive).not.toEqual(true);
      });
      it("lives when it has two or three living neighbours and is alive", function(){
        var cell = new Cell(true, [
          new Cell(true,[]),
          new Cell(true,[])
        ]);
        cell.update();
        expect(cell.isAlive).toEqual(true);
        
        var cell = new Cell(false, [
          new Cell(true,[]),
          new Cell(true,[])
        ]);
        cell.update();
        expect(cell.isAlive).not.toEqual(true);
      });
    });
  });
});
