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

const btnSignIn = document.querySelector("#btnSignIn");

btnSignIn.onclick = () => {
    let email = document.getElementById("email").value;
    if (correosExistentes.includes(email)) {
        localStorage.setItem("email", email);
        window.location.href = "bancodetiempo.html";
    } else {
        const mensajeError = document.querySelector(".email-error");
        mensajeError.textContent = "El email o la contraseña no son correctos.";
    }
};

if (localStorage.getItem("email")) {
    window.location.href = "bancodetiempo.html";
}