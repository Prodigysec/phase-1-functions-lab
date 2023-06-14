// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let hq = 42;
    if (street >= 42) {
        return street - 42;
    } else {
        return 42 - street;
    }
}

function distanceFromHqInFeet(street) {
    let distance = distanceFromHqInBlocks(street);
    return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if ((start - destination)*264 >= 2500) {
        return "cannot travel that far";
    } else if ((destination - start)*264 > 2000) {
        return 25;
    } else if ((start  - destination)*264 > 400 && (start - destination)*264 < 2000) {
        return 2.56;
    } else if ((start - destination) <= 400) {
        return 0;
    } 
}