function calcOccurrences(string, letter) {
    let counter = 0;
    for (let str of string) {
        if (str === letter) {
            counter++
        }
    }

    console.log(counter);
}

calcOccurrences('hello', 'l'); //2