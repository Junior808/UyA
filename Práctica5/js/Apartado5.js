// Crear un script que muestre un informe de la cantidad de párrafos, 
// enlaces y encabezados en tu página de inicio.

let parrafos = document.getElementsByTagName("p");
let enlaces = document.getElementsByTagName("a");
let encabezados = document.getElementsByTagName("h2"); // solo cuento los h2

function contar() {
    let par = `Número de párrafos: ${parrafos.length}`;
    let enl = `Número de enlaces: ${enlaces.length}`;
    let enc = `Número de encabezados (h2): ${encabezados.length}`;
    console.log(par + `\n` + enl + `\n` + enc);
    alert(par + `\n` + enl + `\n` + enc);
}


contar();