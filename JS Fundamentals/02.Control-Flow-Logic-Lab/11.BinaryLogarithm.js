function printBinaryLog(input) {
    for (let n of input) {
        console.log(Math.log2(n));
    }
}

printBinaryLog([2, 3, 4, 5]);