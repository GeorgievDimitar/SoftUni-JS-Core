function rounding([n, p]) {
    if ( p > 15) {
        p = 15;
    }

    let denominator = Math.pow(10, p);
    let result = Math.round(n * denominator) / denominator;
    console.log(result);
}

rounding([10.5, 3]);