//Menú barra de navegación
document.addEventListener("DOMContentLoaded", function () {
    var elemsSideNav = document.querySelectorAll(".sidenav");
    var instancesSideNav = M.Sidenav.init(elemsSideNav);

    var elemsParallax = document.querySelectorAll(".parallax");
    var instancesParallax = M.Parallax.init(elemsParallax);
});
