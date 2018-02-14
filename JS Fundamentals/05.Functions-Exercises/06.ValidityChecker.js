function validityChecker([x1, y1, x2, y2]) {
    if (Number.isInteger(findDist1(x1, y1))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(findDist2(x2, y2))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(findDist3(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function findDist1(x1, y1) {
        return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    }

    function findDist2(x2, y2) {
        return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    }

    function findDist3(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
}

validityChecker([2, 1, 1, 1]);