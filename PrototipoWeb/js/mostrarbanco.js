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
banco = database.ref(`ofertasBdT`);

const element = document.querySelector(".elements");

banco.once('value', (snapshot) => {
    const ofertas = snapshot.val();
    console.log(ofertas);
    for (const i in ofertas) {
        const oferta = document.createElement("div");
        oferta.classList.add("col");
        oferta.classList.add("s12");
        oferta.innerHTML = `
        <p tabindex="0">Título: ${ofertas[i].title}</p>
        <p tabindex="0">${ofertas[i].description}</p>
        <p tabindex="0">Contacto: ${ofertas[i].email}</p>`;
        element.appendChild(oferta);
    }
})