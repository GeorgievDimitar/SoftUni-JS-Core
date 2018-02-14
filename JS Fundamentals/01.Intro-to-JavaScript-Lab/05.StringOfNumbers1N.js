function printNumbers(input) {
    input = Number(input);
    let str = '';
    for (let i = 1; i <= input; i++) {
        str += i;
    }

    console.log(str);
}

printNumbers('11'); //1234567891011