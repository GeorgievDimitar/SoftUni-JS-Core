function cookingByNumbers(input) {
    let n = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        let op = input[i];
        console.log(n = operations(n, op));
    }

    function operations(n, op) {
        switch (op) {
            case 'chop': return  n / 2;
            case 'dice': return  Math.sqrt(n);
            case 'spice': return  n + 1;
            case 'bake': return  n * 3;
            case 'fillet': return n * 0.8;
        }
    }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);