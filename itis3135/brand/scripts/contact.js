var $ = function(id) {return document.getElementById(id);};

var entries = function() {
    var valid = true;

    var name = $("name").firstChild.nodeValue;
    var email = $("email").firstChild.nodeValue;
    var phone = $("phone").firstChild.nodeValue;
    var date = $("date").firstChild.nodeValue;


    if (name == "") {
        $("name").nextElementSibling.firstChild.nodeValue = "Field Required";
        valid = false;
    } else {
        $("name").nextElementSibling.firstChild.nodeValue = "";
    }
    if (email == "") {
        $("email").nextElementSibling.firstChild.nodeValue = "Field Required";
        valid = false;
    } else {
        $("email").nextElementSibling.firstChild.nodeValue = "";
    }
    if (phone == "") {
        $("phone").nextElementSibling.firstChild.nodeValue = "Field Required";
        valid = false;
    } else {
        $("phone").nextElementSibling.firstChild.nodeValue = "";
    }
    if (date == "") {
        $("date").nextElementSibling.firstChild.nodeValue = "Field Required";
        valid = false;
    } else {
        $("date").nextElementSibling.firstChild.nodeValue = "";
    }

    if (valid == true) {
        $("name_sumbitted").firstChild.nodeValue = name;
        $("email_sumbitted").firstChild.nodeValue = email;
        $("phone_sumbitted").firstChild.nodeValue = phone;
        $("date_sumbitted").firstChild.nodeValue = date;
    }
};
window.onload = function() {
    $("submit").onclick = entries;
    $("name").focus();
};