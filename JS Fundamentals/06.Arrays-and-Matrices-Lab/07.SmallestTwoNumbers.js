function printSmallest(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr.slice(0, 2).join(' '));
}

printSmallest([30, 15, 50, 5]); // 5 15