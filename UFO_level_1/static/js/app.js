// from data.js
var tableData = data;
console.log(tableData);


var tbody = d3.select("tbody");
function createTable(data) {
    tbody.html("");
    data.forEach((busqueda) => {
        var row = tbody.append("tr")
    Object.entries(busqueda).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
        }); 
    });
};

function filtro() {
    var fecha = d3.select("#datetime").property("value");
    console.log(fecha);
    var dataFiltrada = tableData;
    console.log(dataFiltrada);
    if (fecha){
        dataFiltrada = dataFiltrada.filter(row => row.datetime === fecha);
        console.log(dataFiltrada);
    }
    createTable(dataFiltrada)
}
d3.selectAll("#filter-btn").on("click", filtro)

