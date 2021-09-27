//let greeting =()=> {
    let userName = prompt("What is your name?");
    let userFeeling = prompt("How are you doing?");
    let todayDate = new Date()
    document.write("<h1>Today is "+ todayDate.toDateString() + ", and the time is: "+ todayDate.toTimeString() +".</h1>");
    document.write("<h1>The Careless Fox welcomes you, "+ userName +"! We're glad you are doing "+ userFeeling +"!</h1><br>")
//}

let favoriteCoffee = ()=> {
    let fav = prompt("Enter your favorite coffee brand:");
    alert("Congratulations! Here's a $10 coupon to "+ fav);
}

let foxAge = ()=> {
    let userAge = prompt("Enter your age: ");
    let convertAge = userAge*5.71;
    alert("Your age in fox years would be "+ convertAge +".");
}

let test3 = ()=> {
    alert("I'm testing my script 3.");
}

let test4 = ()=> {
    alert("I'm testing my script 4.");
}

let lazyTest = ()=> {
    let q1 = prompt("How many times do you go outside of your house?");
    q1 = parseInt(q1);
    let q2 = prompt("How long do you sleep each day?");
    q1 = parseInt(q2);
    let q3 = prompt("How many times a week do you workout?");
    q1 = parseInt(q3);
    let count = 0
    if (q1<=3) {
        count++;
    }
    if (q2>15) {
        count++;        
    }
    if (q3<3) {
        count++;    
    }

    switch (count) {
        case 1:
            alert("You're just tired.");
            break;
        case 2:
            alert("You're becoming lazy.");
            break;
        case 3:
            alert("You are VERY lazy.");
            break;
        default:
            alert("You're not lazy.");
            break;
                    
    }      
}