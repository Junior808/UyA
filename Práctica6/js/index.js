$(document).ready(function() {
    $(".boton").click(function() {
        postId = document.querySelector("#id").value;
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/comments?",
            data: `postId=${postId}`,
            success: function(response) {
                for (const i in response) {
                    let p = $("<p></p>");
                    p.text(`${response[i].name}: ${response[i].body}`);
                    p.setA
                    $(".container").append(p);
                    const container = document.querySelector(".container");
                    container.setAttribute("tabindex", "0");
                }
            },
        });
    });
});
