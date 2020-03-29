// Crear un script que muestre un informe de la cantidad de párrafos, 
// enlaces y encabezados en tu página de inicio.

let parrafos = document.getElementsByTagName("p");
let enlaces = document.getElementsByTagName("a");
let encabezados = document.getElementsByTagName("h2"); // solo cuento los h2

function contar() {
    console.log(`Número de párrafos: ${parrafos.length}`);
    console.log(`Número de enlaces: ${enlaces.length}`);
    console.log(`Número de encabezados (h2): ${encabezados.length}`);
}

contar();