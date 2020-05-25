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
firebase.analytics();

const database = firebase.database();

const btnSignUp = document.querySelector("#btnSignUp");

let nombre = document.querySelector("#first_name");
let apellido = document.querySelector("#last_name");
let email = document.querySelector("#email");

btnSignUp.onclick = () => {
    usuariosBdT = database.ref("usuarios/pruebaBdT/");

    usuariosBdT.set({
        nombre: nombre,
        apellidos: apellido,
        correo: email,
    });
};
