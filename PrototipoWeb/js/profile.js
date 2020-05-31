var firebaseConfig = {
    apiKey: "AIzaSyAYC2xOKqPvMKbQWxXxiQHpW3HbbDdCou0",
    authDomain: "introfirebase-e7ca2.firebaseapp.com",
    databaseURL: "https://introfirebase-e7ca2.firebaseio.com",
    projectId: "introfirebase-e7ca2",
    storageBucket: "introfirebase-e7ca2.appspot.com",
    messagingSenderId: "660691288615",
    appId: "1:660691288615:web:3c97023e6eeab131560402",
    measurementId: "G-S3377XEK4R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
referenciaUsuarios = database.ref(`usuariosBdT`);

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("email")) {
        // const navsInicioSesion = document.querySelectorAll(".navInicioSesion");

        // for (const i in navsInicioSesion) {
        //     navsInicioSesion[i].setAttribute("href", "profile.html");
        //     navsInicioSesion[i].textContent = "Tu perfil";
        // }

        const divInfoPerfil = document.querySelector(".profile-info");

        referenciaUsuarios.once("value", (snapshot) => {
            const usuariosBdT = snapshot.val();

            for (const i in usuariosBdT) {
                if (usuariosBdT[i].correo === localStorage.getItem("email")) {
                    const nombre = document.createElement("p");
                    nombre.classList.add("nombre");
                    nombre.textContent = `${usuariosBdT[i].nombre} ${usuariosBdT[i].apellidos}`;
                    divInfoPerfil.appendChild(nombre);

                    const horas = document.createElement("p");
                    horas.classList.add("horas");
                    horas.textContent = `Horas: ${usuariosBdT[i].horas}`;
                    divInfoPerfil.appendChild(horas);

                    const contacto = document.createElement("p");
                    contacto.classList.add("contacto");
                    contacto.textContent = localStorage.getItem("email");
                    divInfoPerfil.appendChild(contacto);
                }
            }
        });
    } else {
        console.log("NOPE");
    }
});

const btnLogOut = document.querySelector("#btnLogOut");

btnLogOut.onclick = () => {
    localStorage.removeItem("email");
    window.location.href = "index.html";
};
