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

if (localStorage.getItem("email")) {
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
            title.textContent = `Título: ${ofertas[i].title}`;
            title.setAttribute("tabindex", "0");
            oferta.appendChild(title);

            const description = document.createElement("div");
            description.classList.add("description");
            description.textContent = `${ofertas[i].description}`;
            description.setAttribute("tabindex", "0");
            oferta.appendChild(description);

            const horasDoc = document.createElement("div");
            horasDoc.classList.add("description");
            horasDoc.textContent = `Horas: ${ofertas[i].hours}`;
            horasDoc.setAttribute("tabindex", "0");
            oferta.appendChild(horasDoc);

            const fechaDoc = document.createElement("div");
            fechaDoc.classList.add("description");
            fechaDoc.textContent = `Fecha: ${ofertas[i].fecha}`;
            fechaDoc.setAttribute("tabindex", "0");
            oferta.appendChild(fechaDoc);

            const contacto = document.createElement("div");
            contacto.classList.add("contacto");
            contacto.textContent = `Contacto: ${ofertas[i].email}`;
            contacto.setAttribute("tabindex", "0");
            oferta.appendChild(contacto);

            const doc = document.createElement("a");
            doc.classList.add("btn");
            doc.setAttribute("href", `${ofertas[i].url}`);
            doc.textContent = "Acceder al documento";
            doc.setAttribute("tabindex", "0");
            doc.addEventListener.onclick = () =>
                clickDocumento(ofertas[i].hours);
            oferta.appendChild(doc);

            cardHorizontal.appendChild(oferta);
            contenedor.appendChild(cardHorizontal);
            element.appendChild(contenedor);
            numberId++;
        }
    });
} else {
    const pError = document.createElement("p");
    pError.classList.add("error-msg");
    pError.textContent = "Inicie sesión o regístrese para ver los documentos.";
    pError.setAttribute("tabindex", "0");
    element.appendChild(pError);
}

function clickDocumento(tiempo) {
    let email = localStorage.getItem("email");
    let hoursInt = parseInt(tiempo, 10); // pasar a entero en base 10

    referenciaUsuarios = database.ref(`usuariosBdT`);
    let actualizar;

    referenciaUsuarios.once("value", (snap) => {
        const usuariosBdT = snap.val();

        for (const i in usuariosBdT) {
            if (usuariosBdT[i].correo === email) {
                actualizar = database.ref(`usuariosBdT/${i}`);
            }
        }
        let horasActuales;
        actualizar.once("value", (spshot) => {
            horasActuales = spshot.val().horas;
            horasActualesInt = parseInt(horasActuales, 10);
            horasActualesInt -= hoursInt;
            horasActuales = horasActualesInt.toString(10);

            actualizar.update({
                horas: horasActuales,
            });
            window.location.href = "bancodetiempo.html";
        });
    });
}
