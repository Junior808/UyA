const equivalencia = { 'EUR': { 'JPY': '120.52', 'USD': '1.12' }, 'USD': { 'JPY': '107.92', 'EUR': '0.90' }, 'JPY': { 'EUR': '0.0083', 'USD': '0.0093' } };

const boton = document.querySelector(".boton-convertir");

boton.onclick = () => {

    const divisa1 = document.querySelector(".divisa-1").value;
    const divisa2 = document.querySelector(".divisa-2").value;
    const monto = document.querySelector(".monto").value;

    const texto = document.querySelector(".resultado1");
    const p = document.createElement("p");
    texto.setAttribute("tabindex", "0");

    if (divisa1 === divisa2) {
        p.textContent = monto;
    } else {
        const resultado = monto * equivalencia[divisa1][divisa2];
        p.textContent = Math.round((resultado + Number.EPSILON) * 100) / 100;
    }
    texto.replaceChild(p, texto.childNodes[0]);
}
