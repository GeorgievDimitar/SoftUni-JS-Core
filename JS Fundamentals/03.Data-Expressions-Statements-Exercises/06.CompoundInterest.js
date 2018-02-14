function calcValue([P, i, n, t]) {
    let value = P * Math.pow(1 + (i/100) / (12/n), (12/n) * t);
    console.log(value.toFixed(2));
}

calcValue([1500, 4.3, 3, 6]);