document.addEventListener("DOMContentLoaded", function () {
    var elemsCollapsible = document.querySelectorAll(".collapsible");
    var instancesCollapsible = M.Collapsible.init(elemsCollapsible);

    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems);

    const izquierda = document.querySelector("#izda");
    const derecha = document.querySelector("#dcha");
    let actual;
    izquierda.onclick = () => {
        actual = instances[0].el.querySelector(".active");
        actual.setAttribute("tabindex", "-1");
        actual.setAttribute("aria-hidden", "true");
        instances[0].prev();
    };

    derecha.onclick = () => {
        actual = instances[0].el.querySelector(".active");
        actual.setAttribute("tabindex", "-1");
        actual.setAttribute("aria-hidden", "true");
        instances[0].next();
    };
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
