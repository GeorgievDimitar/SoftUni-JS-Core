function processElements(arr) {
    let result = [];
    for (num of arr)
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }

    console.log(result.join('\n'));
}

processElements([7, -2, 8, 9]);