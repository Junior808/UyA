//Menú barra de navegación
document.addEventListener("DOMContentLoaded", function() {
    var elemsSideNav = document.querySelectorAll(".sidenav");
    var instancesSideNav = M.Sidenav.init(elemsSideNav);

    var elemsParallax = document.querySelectorAll(".parallax");
    var instancesParallax = M.Parallax.init(elemsParallax);

    if (localStorage.getItem("email")) {
        console.log(localStorage.getItem("email"));
        const navsInicioSesion = document.querySelectorAll(".navInicioSesion");
        const navsRegistro = document.querySelectorAll(".navRegistro");

        for (const i in navsInicioSesion) {
            navsInicioSesion[i].href = "profile.html";
            navsInicioSesion[i].textContent = "Tu perfil";
        }
        for (const i in navsRegistro) {
            navsRegistro[i].style.display = 'none';
        }
    }
    // else {
    //     console.log("NOPE");
    // }
});