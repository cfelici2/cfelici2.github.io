var $ = function(id) {return document.getElementById(id);};

function tableForm () {
    var activity = $("activity").firstChild.nodeValue;
    var location = $("location").firstChild.nodeValue;
    var duration = $("duration").firstChild.nodeValue;
    var cost = $("cost").firstChild.nodeValue;

    var table = document.getElementById("table");
    var row = table.insertRow(0);

    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    col1.innerHTML = activity;
    col2.innerHTML = location;
    col3.innerHTML = duration;
    col4.innerHTML = cost;
}
windows.onload = function() {
$("add").onclick = tableForm;
};