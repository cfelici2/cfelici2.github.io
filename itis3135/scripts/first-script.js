let favoriteCoffee = ()=> {
    let fav = prompt("Enter your favorite coffee brand:");
    alert("Congratulations! Here's a $10 coupon for "+ fav);
}

let foxAge = ()=> {
    let userAge = prompt("Enter your age: ");
    let convertAge = userAge*5.71;
    alert("Your age in fox years would be "+ convertAge +".");
}

let runningSpeed = ()=> {
    let distance = prompt("Enter your total distance (in kilometers): ");
    distance = parseInt(distance);
    let min = prompt("Enter the amount of time for your run (in minutes):");
    min = parseInt(min);

    let speed = distance/min;
    alert("Your running speed is calculated to be "+ speed +"km/min.")
}

let convertToCentimeters = ()=> {
    let inch = prompt("How tall are you (in inches)?");
    inch = parseInt(inch);

    cm = inch*2.54;
    alert("Your height in centimeters is "+ cm);
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