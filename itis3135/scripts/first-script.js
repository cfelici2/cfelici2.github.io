//let greeting =()=> {
    let userName = prompt("What is your name?");
    let userFeeling = prompt("How are you doing?");
    let todayDate = new Date()
    document.write("<h1>Today is "+ todayDate.toDateString() + ", and the time is: "+ todayDate.toTimeString() +".</h1>");
    document.write("<h1>The Careless Fox welcomes you, "+ userName +"! We're glad you are doing "+ userFeeling +"!</h1><br>")
//}

let favoriteCoffee = ()=> {
    let fav = prompt("Enter your favorite coffee brand:");
    alert("Your favorite coffee brand has been recorded.");
    document.write("Favorite coffee brand: "+ fav);
}

let foxAge = ()=> {
    let userAge = prompt("Enter your age: ");
    let convertAge = userAge*5.71;
    alert("Your age in fox years would be "+ convertAge +".");
    document.write("Fox age: "+ convertAge);
}

let test3 = ()=> {
    alert("I'm testing my script 3.");
}

let test4 = ()=> {
    alert("I'm testing my script 4.");
}

let lazyTest = ()=> {
    let q1 = prompt("How many times do you go outside of your house?");
    let q2 = prompt("How long do you sleep each day?");
    let q3 = prompt("How many times a week do you workout?");
    if (q1<=3) {
        if (q2>15) {
            if (q3<3) {
                alert("You are VERY lazy.");
            }
            alert("You're becoming lazy.'");
        }
        alert("You're just tired.");
    }
}