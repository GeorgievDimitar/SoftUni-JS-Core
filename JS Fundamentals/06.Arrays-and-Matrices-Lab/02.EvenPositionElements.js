function findElements(arr) {
    console.log(arr.filter((e, i) => {return i % 2 === 0}).join(' '));
}

findElements(['20', '30', '40']); // 20 40