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
let selectedFile;

$("#file").on("change", function (event) {
    selectedFile = event.target.files[0];
});

function uploadFile() {
    // Create a root reference
    let filename = selectedFile.name;
    let storageRef = firebase.storage().ref("/trabajosBdT/" + filename);

    let uploadTask = storageRef.put(selectedFile);

    // Observers:

    uploadTask.on(
        "state_changed",
        function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log("Upload is paused");
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log("Upload is running");
                    break;
            }
        },
        function (error) {
            // Handle unsuccessful uploads
        },
        function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                    let url = downloadURL;
                    // console.log("File available at", downloadURL);
                });
        }
    );
}

// Subir oferta
const btnUploadDoc = document.querySelector("#btnUploadDoc");
btnUploadDoc.onclick = () => {
    // let url = uploadFile();

    // Create a root reference
    let filename = selectedFile.name;
    let storageRef = firebase.storage().ref("/trabajosBdT/" + filename);

    let uploadTask = storageRef.put(selectedFile);

    // Observers:

    uploadTask.on(
        "state_changed",
        function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log("Upload is paused");
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log("Upload is running");
                    break;
            }
        },
        function (error) {
            // Handle unsuccessful uploads
        },
        function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                    let url = downloadURL;
                    console.log("URL", url);

                    //Enviar todo.
                    let email = document.getElementById("email").value;
                    // let emailError = document.querySelector(".email-error");
                    let title = document.getElementById("title_doc").value;
                    let hours = document.getElementById("hours").value;
                    let description = document.getElementById("textarea1")
                        .value;

                    banco = database.ref(`ofertasBdT`);

                    banco.push().set({
                        title: title,
                        hours: hours,
                        description: description,
                        email: email,
                        url: url,
                    });
                    // console.log("File available at", downloadURL);
                });
        }
    );

    // console.log("URL", url);

    // //Enviar todo.
    // let email = document.getElementById("email").value;
    // // let emailError = document.querySelector(".email-error");
    // let title = document.getElementById("title_doc").value;
    // let hours = document.getElementById("hours").value;
    // let description = document.getElementById("textarea1").value;

    // banco = database.ref(`ofertasBdT`);

    // banco.push().set({
    //     title: title,
    //     hours: hours,
    //     description: description,
    //     email: email,
    // });
};
