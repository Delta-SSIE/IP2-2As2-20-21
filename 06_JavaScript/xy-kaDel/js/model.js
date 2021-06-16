class Model {
    dimension;
    x;
    y;
    map;
    direction; //0 - doprava, 1 nahoru, atd.
    
    constructor(dimension) {
        this.dimension = dimension;
        this.reset();
    }

    reset() {
        this.x = 0;
        this.y = this.dimension - 1;
        this.direction = 0;

        this.map = [];
        for (let x = 0; x < this.dimension; x++) {
            this.map[x] = [];
            for (let y = 0; y < this.dimension; y++) {
                this.map[x][y] = false;
            }
        }
        
        return true;
    }

    /**
     * Turns robot counterclockwise
     * @returns boolean true on success, otherwise false
     */
    turn() {
        this.direction++;
        this.direction %= 4;

        return true;
    }

    step() {
        let newX = this.x;
        let newY = this.y;

        switch (this.direction) {
            case 0:
                newX++;
                break;
            case 1:
                newY--;
                break;
            case 2:
                newX--;
                break;
            case 3:
                newY++;
                break;
        }

        if (newX >= 0 && newX < this.dimension && newY >= 0 && newY < this.dimension) {
            this.x = newX;
            this.y = newY;
            return true;
        } else {
            return false;
        }

    }

    fill() {
        if (this.map[this.x][this.y]) {
            //true - je tam vyplněno
            return false;
        } else {
            this.map[this.x][this.y] = true;
            return true;
        }
    }

    clear() {
        if (!this.map[this.x][this.y]) {
            //false - je tam prázdno
            return false;
        } else {
            this.map[this.x][this.y] = false;
            return true;
        }
    }    
}