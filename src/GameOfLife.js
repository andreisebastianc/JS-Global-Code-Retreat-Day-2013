// no conditionals
//  no if/else, while, foreach, switch
// 4 lines per method max
// 3d universe

// what works: validation
// almost nothing else

(function GameOfLife() {

    var _kill = function() {
        this.isAlive = false;
    };

    var stateHandler = Array.apply(null, new Array(26)).map(function() {
        return function () {};
    });
    stateHandler[0] = _kill;
    stateHandler[1] = _kill;

    var Universe = function () {
    };

    var Cell = function (isAlive) {
        this.isAlive = isAlive;
        this.neighbors = [];
    }
    Cell.prototype.addNeighbors = function () {
        this.neighbors = this.neighbors.concat.apply(this.neighbors, arguments);
    };
    Cell.prototype._getLivingNeighbors = function () {
        return this.neighbors.filter(function(cell){
            return cell.isAlive;
        }).length;
    }
    Cell.prototype.update = function () {
        stateHandler[this._getLivingNeighbors()].call(this);
    }

    window.Universe = new Universe();
    window.Cell = Cell;

}());
