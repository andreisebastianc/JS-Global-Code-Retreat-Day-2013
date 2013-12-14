function GameOfLife() {
}

// seed cells
// create cells from seed
// update cells step
// cells have simple alive or dead state
// cells know their neighbours
// cells receive their neighbours randomly

function World(){
    this.cells = [];
}
World.prototype.create = function (numberOfLivingCells) {
    if (typeof numberOfLivingCells !== 'number') {
        throw "Need a valid number of cells";
    }
    for (var i = 0, l = numberOfLivingCells; i < l; i ++) {
        this.cells.push( new Cell(true) );
    }
}

function Cell(state) {
    if (state !== true && state !== false) {
        throw "Need valid state.";
    }
    this.state = state || true;
}
