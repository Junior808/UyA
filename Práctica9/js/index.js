// import 'materialize'
// // from './js/materialize.js's

//Acordeon
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);
});
const boton1 = document.querySelector("#button-1");
boton1.onclick = () => {
    const body1 = document.querySelector("#body-1").getAttribute("hidden");
    if (body1 === "false" || body1 === "") {
        document.querySelector("#body-1").setAttribute("hidden", "true");
    } else {
        document.querySelector("#body-1").setAttribute("hidden", "false");
    }
};

const boton2 = document.querySelector("#button-2");
boton2.onclick = () => {
    const body2 = document.querySelector("#body-2");
    if (body2 === "false" || body2 === "") {
        document.querySelector("#body-2").setAttribute("hidden", "true");
    } else {
        document.querySelector("#body-2").setAttribute("hidden", "false");
    }
};

const boton3 = document.querySelector("#button-3");
boton3.onclick = () => {
    const body3 = document.querySelector("#body-3");
    if (body3 === "false" || body3 === "") {
        document.querySelector("#body-3").setAttribute("hidden", "true");
    } else {
        document.querySelector("#body-3").setAttribute("hidden", "false");
    }
};
//!Acordeon

var elems;
var instances;

document.addEventListener("DOMContentLoaded", function () {
    elems = document.querySelectorAll(".carousel");
    instances = M.Carousel.init(elems);
});
const izquierda = document.querySelector("#izda");
const derecha = document.querySelector("#dcha");
const carr_items = document.querySelectorAll(".carousel-item");

izquierda.onclick = () => {
    // for (let index = 0; index < carr_items.length; index++) {
    //     const element = carr_items[index];
    //     const element = document.querySelector("#body-1").getAttribute("hidden");
    // }
    // carr_items.forEach(element => {
    //     let id = element.getAttribute("id");
    //     if (element.getAttribute("tabindex") == '0') {
    //         element.setAttribute("tabindex", "-1");
    //         element.setAttribute("aria-hidden", "true");
    //     } else if (element.getAttribute("id") == id - 1) { // tener en cuenta que si es 0 hay que sumarle carr_items.lenght
    //         element.setAttribute("tabindex", "0");
    //         element.setAttribute("aria-hidden", "false");
    //     }
    // });

    let current = instances[0].el.querySelector(".active");
    current.setAttribute("tabindex", "-1");
    current.setAttribute("aria-hidden", "true");
    current.blur();
    instances[0].prev();
    let newEl = instances[0].el.querySelector(".active");
    newEl.focus();
    newEl.setAttribute("tabindex", "0");
    newEl.setAttribute("aria-hidden", "true");
};

derecha.onclick = () => {
    let current = instances[0].el.querySelector(".active");
    current.setAttribute("tabindex", "-1");
    current.setAttribute("aria-hidden", "true");
    current.blur();
    instances[0].next();
    let newEl = instances[0].el.querySelector(".active");
    newEl.focus();
    newEl.setAttribute("tabindex", "0");
    newEl.setAttribute("aria-hidden", "true");
};
