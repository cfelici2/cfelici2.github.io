$(document).ready(function() {
    $("#sorkin").click(function() {
        $.ajax({
            type: "get",
            url: "json_files/sorkin.json",
            //beforeSend: function() {},
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                var html = "";
                $.each(data.items, function(key, value) {
                    html += "<h1>" + value.title + "</h1>" 
                    html += "<h2>" + value.month + "</h2>" 
                    html += "<h3>" + value.speaker + "</h3>"
                    html += "<img src=" + value.image.m + ">" 
                    html += "<p>" + value.text + "</p>" 
                });
                $("main").html(html);
            }
        });
    });
}); // end ready