function modifyAverage(number) {
    let numberAsString = number.toString();
    let sum = sumDigits(numberAsString);
    while (sum / numberAsString.length <= 5) {
        numberAsString += '9';
        sum = sumDigits(numberAsString);
    }

    console.log(numberAsString);

    function sumDigits(numberAsString) {
        let sum = 0;
        for (let digit of numberAsString) {
            sum += Number(digit);
        }

        return sum;
    }
}

modifyAverage(101); //1019999