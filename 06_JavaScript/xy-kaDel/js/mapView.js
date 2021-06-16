class MapView {
    tiles; // pole dlaždic (div)
    robot; // div s robotem

    constructor(mapId, dimension) {
        //vytvořit dlaždice
        const mapGrid = document.getElementById(mapId);

        this.tiles = [];
        for (let x = 0; x < dimension; x++) {
            this.tiles[x] = [];
            for (let y = 0; y < dimension; y++) {
                const tile = document.createElement("div");
                mapGrid.appendChild(tile);
                tile.style.gridColumn = x + 1;
                tile.style.gridRow = y + 1;
                tile.classList.add("tile");

                this.tiles[x][y] = tile;
            }
        }
        //vytvořit robota
        this.robot = document.createElement("img");
        this.robot.style.gridColumn = 1;
        this.robot.style.gridRow = 1;
        mapGrid.appendChild(this.robot);
    }

    render(model) {
        const dimension = this.tiles.length;
        for (let x = 0; x < dimension; x++) {
            for (let y = 0; y < dimension; y++) {
                this.tiles[x][y].classList.toggle("filled", model.map[x][y]);
            }
        }        
    } 
}