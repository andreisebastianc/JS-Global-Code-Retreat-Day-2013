function GameOfLife() {
}

// cell object
// has current and next state
// knows its neighbours
// it updates itself

// representation
// initial seed
// has a generation step

function Cell(initialState, neighbours){
  this.isAlive = initialState;
  this.neighbours = neighbours;
}

Cell.prototype._extractNumberOfLivingNeighbours = function (){
    var i,l,v, livingCells = 0;

    for (i = 0, l = this.neighbours.length; i < l; i ++) {
        v = this.neighbours[i];
        if (v.isAlive) {
            livingCells++;
        }
    }

    return livingCells;
}

Cell.prototype.update = function () {
    var living = this._extractNumberOfLivingNeighbours();

    if(this.isAlive) {
      if (living < 2) {
          this.isAlive = false;
          return;
      }
      
      if(living === 2 || living === 3) {
          this.isAlive = true;
          return;      
      }
    }    
}
