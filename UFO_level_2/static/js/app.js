// from data.js
var tableData = data;

// from data.js
var tableData = data;
console.log(tableData);

// Esta funcion crea la tabla en la página
var tbody = d3.select("tbody");
function createTable(data) {
    tbody.html(" ");
    data.forEach((busqueda) => {
        var row = tbody.append("tr")
        Object.entries(busqueda).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
        }); 
    });
};



function filtro() {
    event.preventDefault();
    var fecha = d3.select("#fecha").property("value");
    var ciudad = d3.select("#ciudad").property("value");
    var estado = d3.select("#estado").property("value");
    var pais = d3.select("#pais").property("value");
    var forma = d3.select("#forma").property("value");
    console.log(fecha, ciudad, estado, pais, forma);
    var dataFiltrada = tableData;
    console.log(dataFiltrada);
    if (fecha){
        var dataFiltrada = tableData.filter(row =>
            row.datetime === fecha &&
            row.city === ciudad &&
            row.state === estado &&
            row.country === pais &&
            row.shape === forma
        );
        console.log(dataFiltrada);
    }
    createTable(dataFiltrada)
}
d3.selectAll("#filter-btn").on("click", filtro)

