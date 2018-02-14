function printLastDay([day, month, year]) {
    let date = new Date(year, month-1, 0);

    console.log(date.getDate());
}

printLastDay([17, 3, 2002]);