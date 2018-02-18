function biggestElement(matrix) {
    let max = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > max) {
                max = matrix[row][col];
            }
        }
    }

    console.log(max);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);

// function biggestElement(matrix) {
//     console.log(
//         matrix.map(arr => arr.sort((a, b) => b - a)[0])
//             .sort((a, b) => b - a)[0]
//     )
// }