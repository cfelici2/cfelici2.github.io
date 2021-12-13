$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "json/places.json",
        beforeSend: function() {
            $("#places").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#places").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#places").append(
                        "<li><h3>" + value.name + "</h3>" +
                        "<img src=" + value.image + ">" +
                        "<p>" + value.about + "</p>" +
                        "<p>" + value.list + "</p></li>" +
                        "<br>"
                    );
                });
            });
        }
    });
});