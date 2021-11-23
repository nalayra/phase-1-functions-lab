function distanceFromHqInBlocks(number) {
    return Math.abs(number - 42);
}

function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}
function calculatesFarePrice(start, end) {
    let fare;
    if (distanceTravelledInFeet(start, end) <= 400) {
        return fare = 0;
    }
    else if (distanceTravelledInFeet(start, end) <= 2000) {
        return fare = (distanceTravelledInFeet(start, end) - 400) * .02;
    }
    else if (distanceTravelledInFeet(start, end) <= 2500 && distanceTravelledInFeet(start, end) > 2000) {
        return fare = 25;
    }
    else {
        return fare = 'cannot travel that far';
    }
}