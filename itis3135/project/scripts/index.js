$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "index.json",
        beforeSend: function() {
            $("#pages").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#pages").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#pages").append(
                        "<a href=" + value.link + ">" +
                        "<h3>" + value.title + "</h3></a>"
                    );
                });
            });
        }
    });
});