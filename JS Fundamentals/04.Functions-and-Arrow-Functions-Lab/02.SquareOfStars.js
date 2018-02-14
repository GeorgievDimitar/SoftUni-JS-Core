function printSquare(n) {
    function printStars(count = n) {
        console.log('* '.repeat(n));
    }

    for (let i = 1; i <= n; i++) {
        printStars();
    }
}

printSquare(5);