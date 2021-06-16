window.addEventListener('DOMContentLoaded', (event) => {

    const dim = 10;

    const model = new Model(dim);
    const mapView = new MapView("map", dim);

    model.map[3][5] = true;
    mapView.render(model);

});