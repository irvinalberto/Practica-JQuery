const add = () => {
    $("#add").click(function() {
        let texto = $("#texto").val();
        console.log(texto);
        if (texto.length) {
            $("#demo").append(`<li>${texto}</li>`)
        }
    });
}