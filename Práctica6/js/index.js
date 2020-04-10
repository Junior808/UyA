const xhttp = new XMLHttpRequest();

$(document).ready(function() {
    $(".boton").click(function() {

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const response = JSON.parse(this.responseText);
                console.log(response);

                for (const i in response) {
                    let p = $("<p></p>")
                    p.text(`${response[i].name}: ${response[i].body}`);
                    $(".formulario").append(p);
                    console.log(response[i].name);
                }

            }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=1", true);
        xhttp.send();

    });
});