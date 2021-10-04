let runPolygon = ()=> {
    let numShape = prompt("The Careless Fox would like your number (1-12): ");
    numShape = validateEntry(numShape);
    if (numShape != 0) {
        let polygon = getShape(numShape);
        alert("The polygon is a "+polygon+".");
    }
}

let validateEntry = (entry)=> {
    if (entry > 12) {
        alert("Entry is out of range. Please try again.");
        return 0;
    }
        return entry;
}

let getShape = (num)=>  {
    if (num == 1) {
        return ("hentagon");
    } else if (num == 2) {
        return ("digon");
    } else if (num == 3) {
        return ("trigon");
    } else if (num == 4) {
        return ("tetragon");
    } else if (num == 5) {
        return ("pentagon");
    } else if (num == 6) {
        return ("hexagon");
    } else if (num == 7) {
        return ("heptagon");
    } else if (num == 8) {
        return ("octagon");
    } else if (num == 9) {
        return ("enneagon");
    } else if (num == 10) {
        return ("decagon");
    } else if (num == 11) {
        return ("hendecagon");
    } else if (num == 12) {
        return ("dodecagon");
    }
}