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

// Base de datos de los usuarios
usuariosBdT = database.ref(`usuariosBdT`);
const correosExistentes = [];

usuariosBdT.on("value", (snapshot) => {
    const usuarios = snapshot.val();
    for (const i in usuarios) {
        correosExistentes.push(usuarios[i].correo);
    }
});

//Registro
const btnSignUp = document.querySelector("#btnSignUp");
btnSignUp.onclick = () => {
    let nombre = document.getElementById("first_name").value;
    let nombreError = document.querySelector(".first_name-error");
    let apellido = document.getElementById("last_name").value;
    let apellidoError = document.querySelector(".last_name-error");
    let email = document.getElementById("email").value;
    let emailError = document.querySelector(".email-error");

    const alerta = document.querySelector(".signup-error");
    // comprobar que no esté en blanco
    if (nombre === "" || apellido === "" || email === "") {
        alerta.textContent = `No pueden incluirse campos vacíos.`;
        if (nombre === "") nombreError.textContent = `Debe incluir un nombre`;
        if (apellido === "")
            apellidoError.textContent = `Debe incluir un apellido`;
        if (email === "")
            emailError.textContent = `Ejemplo: sunombre@gmail.com`;
    } else {
        if (correosExistentes.includes(email)) {
            alert("El correo electrónico introducido ya existe.");
        } else {
            localStorage.setItem("email", email);
            usuariosBdT.push().set({
                nombre: nombre,
                apellidos: apellido,
                correo: email,
                horas: 5,
            });
            window.location.href = "bancodetiempo.html";
        }
    }
};
//!Registro
