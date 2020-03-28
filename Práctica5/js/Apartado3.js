
function moneda(){
    this.nombre
    this.tipoDeCambio

    this.convertir = function(monto){
      conversionResultado = monto = this.tipoDeCambio
      document.getElementById('resultadoDelCambio').innerHTML = conversionResultado
    }
}

var yen = new moneda()
    yen.nombre = "Yenes"
    yen.tipoDeCambio = 99.5

function convertirMoneda(){

    var montoSeleccionado = document.getElementById('monto').value
    yen.convertir(montoSeleccionado)
}

