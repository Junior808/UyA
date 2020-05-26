// import { firebase } from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

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

const btnSignUp = document.querySelector("#btnSignUp");

// let nombre = document.getElementById("first_name").value;
// let apellido = document.getElementById("last_name").value;
// let email = document.getElementById("email").value;

// function submit() {
//     usuariosBdT = database.ref("usuarios/pruebaBdT/");

//     alert(nombre);

//     // usuariosBdT.set({
//     //     nombre: nombre,
//     //     apellidos: apellido,
//     //     correo: email,
//     // });
// }

btnSignUp.onclick = () => {
    let nombre = document.getElementById("first_name").value;
    let apellido = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    usuariosBdT = database.ref("usuarios/pruebaBdT/");

    alert(nombre);

    usuariosBdT.set({
        nombre: nombre,
        apellidos: apellido,
        correo: email,
    });
};