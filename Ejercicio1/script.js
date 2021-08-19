const add = () => {
    $("#add").click(function() {
        let texto = $("#texto").val();
        if (texto.length) {
            $("#demo").append(`<li>${texto}</li>`)
        }
    });
}