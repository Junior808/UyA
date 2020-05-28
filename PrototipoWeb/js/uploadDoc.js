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

// Subir oferta
const btnUploadDoc = document.querySelector("#btnUploadDoc");
btnUploadDoc.onclick = () => {
    let email = document.getElementById("email").value;
    // let emailError = document.querySelector(".email-error");
    let title = document.getElementById("title_doc").value;
    let hours = document.getElementById("hours").value;
    let description = document.getElementById("textarea1").value;

    banco = database.ref(`ofertasBdT`);

    banco.push().set({
        title: title,
        hours: hours,
        description: description,
        email: email,
    })
}