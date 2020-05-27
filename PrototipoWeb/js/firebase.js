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
    if ((nombre === "") || (apellido === "") || (email === "")) {
        alerta.textContent = `No pueden incluirse campos vacíos.`;
        if (nombre === "") nombreError.textContent = `Debe incluir un nombre`;
        if (apellido === "") apellidoError.textContent = `Debe incluir un apellido`;
        if (email === "") emailError.textContent = `Ejemplo: sunombre@gmail.com`;
    } else {
        usuariosBdT = database.ref(`usuariosBdT`);
        const correosExistentes = [];

        usuariosBdT.push().set({
            nombre: nombre,
            apellidos: apellido,
            correo: email,
        });

        // console.log(ayuda.child("usuariosBdT").orderByKey());

        // const ayuda = database.ref(`introfirebase-e7ca2`);
        // let delref = ayuda.child("usuariosBdT").orderByKey().limitToLast(1);
        // console.log(delref);

        let delref;
        getLastFromList(usuariosBdT);

        function getLastFromList(ref) {
            ref.once("child_added", function(snapshot) {
                delref = snapshot.val();
            });
        }
        console.log(delref);
        alert("STOP");

        let flag = false;
        usuariosBdT.on('value', (snapshot) => {
            const usuarios = snapshot.val();
            for (const i in usuarios) {
                correosExistentes.push(usuarios[i].correo);
                console.log(usuarios[i].correo);
            }
            console.log(correosExistentes);
            for (let i = 0; i < correosExistentes.length; i++) {
                if ((flag == false) && (correosExistentes[i] == email)) {
                    flag = true;
                    correosExistentes.splice(i, 1);
                } else if ((flag == true) && (correosExistentes[i] == email)) {
                    alerta.textContent = "El correo electrónico introducido ya existe.";
                    console.log(delref);
                    delref.remove();
                    i = correosExistentes.length;
                    alert("aqui");
                }
            }
            console.log(correosExistentes);
        })



        // if (correosExistentes.includes(email)) {
        //     alert("nanain");
        //     alerta.textContent = "El correo electrónico introducido ya existe.";
        // } else {
        //     usuariosBdT.push().set({
        //         nombre: nombre,
        //         apellidos: apellido,
        //         correo: email,
        //     });
        //     // window.location.href = "bancodetiempo.html";
        // }


    }

};
//!Registro