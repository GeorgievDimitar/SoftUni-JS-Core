function composeObject([firstKey, firstValue, secondKey, secondValue, thirdKey, thirdValue]) {
    let obj = {};
    obj[firstKey] = firstValue;
    obj[secondKey] = secondValue;
    obj[thirdKey] = thirdValue;

    console.log(obj);
}

composeObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);