//Variable for calculator input
let input = "0";

//Show result of calculator inputs
let showResult = ()=> {
    alert(input);
}

//Clears the calculator
let allClear = ()=> {
    alert("Calculator cleared");
    return input = 0;
    
}

//Show an alert for the pressed number and add it to input
let showNum = (num)=> {
    switch (num) {
        case 1:
            if (input == "0") {
                alert(1);
                return input ="1";
                
            } else {
                alert(input+"1");
                return input=input+"1";
            }
        case 2:
            if (input == "0") {
                alert(2);
                return input ="2";
                
            } else {
                alert(input+"2");
                return input=input+"2";
            }
        case 3:
            if (input == "0") {
                alert(3);
                return input ="3";
                
            } else {
                alert(input+"3");
                return input=input+"3";
            }
        case 4:
            if (input == "0") {
                alert(4);
                return input ="4";
                
            } else {
                alert(input+"4");
                return input=input+"4";
            }
        case 5:
            if (input == "0") {
                alert(5);
                return input ="5";
                
            } else {
                alert(input+"5");
                return input=input+"5";
            }
        case 6:
            if (input == "0") {
                alert(6);
                return input ="6";
                
            } else {
                alert(input+"6");
                return input=input+"6";
            }
        case 7:
            if (input == "0") {
                alert(7);
                return input ="7";
                
            } else {
                alert(input+"7");
                return input=input+"7";
            }
        case 8:
            if (input == "0") {
                alert(8);
                return input ="8";
                
            } else {
                alert(input+"8");
                return input=input+"8";
            }
        case 9:
            if (input == "0") {
                alert(9);
                return input ="9";
                
            } else {
                alert(input+"9");
                return input=input+"9";
            }
        case 10:
            alert(input+".");
            return input=input+".";
    }
}

//Math operations
//Trouble on working math operations
let add = ()=> {
    let addNum = showNum(input);
    let result = parseInt(input)+addNum;
    return result;
}
let subtract = ()=> {
    let subNum = showNum(input);
    let result = input-subNum;
    return result;
}
let multiply = ()=> {
    let mulNum = showNum(input);
    let result = input*mulNum;
    return result;
}
let divide = ()=> {
    let divNum = showNum(input);
    let result = input/divNum;
    return result;
}