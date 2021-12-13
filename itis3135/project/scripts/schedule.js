$(document).ready(function() {
    var total_cost = 0;
    var total_days = 0;
    $("#add").click(function() {
        var activity = $("#activity").val();
        var location = $("#location").val();
        var duration = parseFloat($("#duration").val());
        var cost = parseFloat($("#cost").val());
        total_cost = parseFloat(total_cost + cost);
        total_days = parseFloat(total_days + duration);

        $("#table").append(
            "<tr>" +
                "<td>" + activity + "</td>" +
                "<td>" + location + "</td>" +
                "<td>" + duration + "</td>" +
                "<td>" + cost + "</td>" +
            "</tr>"
        );
        $("#tcost").html("<p>Total cost of trip: " + total_cost + "</p>");
        $("#tdays").html("<p>Total amount of days for trip: " + total_days + "</p>");
    });
});