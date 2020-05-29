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

banco.once("value", (snapshot) => {
    const ofertas = snapshot.val();
    console.log(ofertas);

    let numberId = 1;
    for (const i in ofertas) {
        const contenedor = document.createElement("div");
        contenedor.classList.add("col", "s12", "l6");

        const cardHorizontal = document.createElement("div");
        cardHorizontal.classList.add("card", "horizontal");

        const oferta = document.createElement("div");
        oferta.classList.add("card-stacked");
        oferta.setAttribute("id", `elem${numberId}`);

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = `Título: ${ofertas[i].title}`
        oferta.appendChild(title);

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent = `${ofertas[i].description}`
        oferta.appendChild(description);

        const contacto = document.createElement("div");
        contacto.classList.add("contacto");
        contacto.textContent = `Contacto: ${ofertas[i].email}`
        oferta.appendChild(contacto);

        const doc = document.createElement("a");
        doc.classList.add("doc");
        doc.setAttribute("href", `${ofertas[i].url}`);
        doc.textContent = "Acceder al documento";
        oferta.appendChild(doc);

        // <p tabindex="0">Título: ${ofertas[i].title}</p>
        // <p tabindex="0">${ofertas[i].description}</p>
        // oferta.innerHTML += `
        // <a href=${ofertas[i].url}>Documento</a>`;
        cardHorizontal.appendChild(oferta);
        contenedor.appendChild(cardHorizontal);
        element.appendChild(contenedor);
        numberId++;
    }
});