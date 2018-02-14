function oddOrEven (n) {
    let remainder = n % 2;
    if (remainder === 0) {
        console.log('even');
    } else if (remainder === Math.round(remainder)) {
        console.log('odd');
    } else {
        console.log('invalid');
    }
}

oddOrEven(-3);