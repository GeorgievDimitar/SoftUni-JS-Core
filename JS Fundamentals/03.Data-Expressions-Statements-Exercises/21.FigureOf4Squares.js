function printFigure(n) {
    let size = n % 2 != 0 ? n : n -1;
    let count = (2 * n - 4) / 2;
    let middle = Math.ceil(size / 2);
    for (let i = 1; i <= size; i++) {
        if (i == 1 || i == middle || i == size) {
            console.log(`+${'-'.repeat(count)}+${'-'.repeat(count)}+`);
        } else {
            console.log(`|${' '.repeat(count)}|${' '.repeat(count)}|`);
        }
    }
}

printFigure(6)