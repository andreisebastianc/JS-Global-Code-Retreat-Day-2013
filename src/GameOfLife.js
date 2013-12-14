// session 3
// ping pong pair programming with TDD
// ... stopped at Zombie

(function GameOfLife() {
    var World = function (seed) {
        this.cells = seed.map(function (alive) {
            return new Cell(alive);
        });
    };
    World.prototype.tick = function () {
        return;
    }

    var Cell = function (isAlive) {
        this._alive = isAlive;
        this.neighbors = [];
    };
    Cell.prototype.isAlive = function () {
        return this._alive;
    }
    Cell.prototype.addNeighbors = function () {
        this.neighbors = this.neighbors.concat.apply(this.neighbors, arguments);

        for (var i = 0, l = arguments[0].length; i < l; i ++) {
            var v = arguments[0][i];

            v.neighbors.push(this);
        }
    };
    Cell.prototype.update = function () {
        var living = this._extractNumberOfLivingNeighbors();
        if (this._alive) {
            if (living < 2 || living > 3) {
                this._alive = false;
            }
            return;
        }
        if (living === 3) {
            this._alive = true;
        }
    };
    Cell.prototype._extractNumberOfLivingNeighbors = function () {
        return this.neighbors.filter(function (cell) {
            return cell._alive;
        }).length;
    };


    window.World = World;
    window.Cell = Cell;
} ())
