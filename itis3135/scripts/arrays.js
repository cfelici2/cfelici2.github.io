"use strict"
var $ = function(id) {return document.getElementById(id);}

var person = [];
var salaries = [];
var list = document.getElementById("employees");

var addSalary = ()=> {
    var isValid = true;
    var name = $("name").value;
    var salary = $("salary").value;

    if (name == "") {
        alert("Please enter a name.");
        isValid = false;
    } else {
        isValid = true;
    }

    if (salary == "") {
        alert("Please enter a salary.");
        isValid = false;
    } else {
        isValid = true;
    }

    if (isValid == true) {
        person.push(name);
        salaries.push(salary);
        alert("Information successfully added.");
    }
}

let displaySalary = ()=> {
    var table = "";

    for (var i=0; i<salaries.length; i++) {
        table = table +"<tr><td>"+person[i]+":</td><td>"+salaries[i]+"</td></tr>";
    }
    $("results_table").innerHTML = table;
}

let displayResults = ()=> {
    var avg = 0;
    var high = 0;
    var pavg = "";
    var phigh = "";
    var header = "Average salary and highest salary:"

    for (var i=0; i<salaries.length; i++) {
        if (salaries[i] > high) {
            high = salaries[i];
        }
        avg = avg+salaries[i];
    }
    avg = avg/salaries.length;

    pavg = "Average Salary: "+avg;
    phigh = "Highest Salary: "+high;
}

window.onload = ()=> {
    $("addBtn").onclick = addSalary;
    $("salaryBtn").onclick = displaySalary;
    $("resultBtn").onclick = displayResults;
    $("name").focus();
}