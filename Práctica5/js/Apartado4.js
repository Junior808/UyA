// Define una función javascript que calcule la edad de los usuarios, y su sueldo. 
// Debes considerar un json de ejmplo con los datos, en el que se registra para 
// cada usuario su dni, año de nacimiento, fecha de ingreso en la empresa, plus de 
// productividad en %, plus de antigüedad bruto (0,1% por cada tres años trabajado) 
// y el sueldo base. (El json debe estar en el propio código, inicializando una 
// variable, explica por qué se te exige este requisito).

const hoy = new Date();

// new Date(año_num,mes_num,dia_num)

const usuarioA = {
    dni: "43585858K",
    nacimiento: new Date(1982, 07, 06), // "6/07/1982",
    fIngreso: new Date(2012, 05, 15), // "15/05/2012",
    plusProductividad: 0.1,
    productividadbruto: function() {
        let b = hoy.getFullYear() - this.fIngreso.getFullYear(); // calculo los años que lleva trabajados
        b = (b / 3); // los años trabajados los divido entre tres
        b = Math.trunc(b); // me quedo con la parte entera
        b = b * 0.1; // cada 3 años trabajados, incremento el 0.1
        return b; // devuelvo dicho porcentaje
    },
    sueldo: 1500
}

const usuarioB = {
    dni: "48858553D",
    nacimiento: new Date(1964, 02, 29),
    fIngreso: new Date(2008, 03, 20),
    plusProductividad: 0.1,
    productividadbruto: function() {
        let b = hoy.getFullYear() - this.fIngreso.getFullYear(); // calculo los años que lleva trabajados
        b = (b / 3); // los años trabajados los divido entre tres
        b = Math.trunc(b); // me quedo con la parte entera
        b = b * 0.1; // cada 3 años trabajados, incremento el 0.1
        return b; // devuelvo dicho porcentaje
    },
    sueldo: 1150
}

const usuarioC = {
    dni: "18465496S",
    nacimiento: new Date(1977, 10, 05),
    fIngreso: new Date(2001, 04, 16),
    plusProductividad: 0.1,
    productividadbruto: function() {
        let b = hoy.getFullYear() - this.fIngreso.getFullYear(); // calculo los años que lleva trabajados
        b = (b / 3); // los años trabajados los divido entre tres
        b = Math.trunc(b); // me quedo con la parte entera
        b = b * 0.1; // cada 3 años trabajados, incremento el 0.1
        return b; // devuelvo dicho porcentaje
    },
    sueldo: 1900
}

function calcular(usuario) {
    let nac = usuario.nacimiento.getFullYear();
    let edad = hoy.getFullYear() - nac;
    let sueldo = usuario.sueldo;
    let auxa = sueldo * usuario.plusProductividad;
    let auxb = sueldo * usuario.productividadbruto();
    sueldo = sueldo + auxa + auxb;

    const resultado = [edad, sueldo];

    return resultado;
}

function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

}

const usuarios = [usuarioA, usuarioB, usuarioC];
const texto = document.querySelector(".sueldo");
const boton_edad = document.querySelector(".boton-edad");

boton_edad.onclick = () => {

    const p = document.querySelector(".resultado2");
    const usuario_aleatorio = random_item(usuarios);
    const mostrar = calcular(usuario_aleatorio);

    p.setAttribute("tabindex", "0");
    p.textContent = `Usuario ${usuario_aleatorio.dni} de edad ${mostrar[0]} y con sueldo ${mostrar[1]}.`;
    // texto.replaceChild(p, texto.childNodes[2]);
}