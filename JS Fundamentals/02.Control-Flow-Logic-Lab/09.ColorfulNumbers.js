function solve(n) {
    let string = `<ul>\n`;
    for (let i = 1; i <= n; i++) {
        let color = i % 2 === 0 ? 'blue' : 'green';
        string += `   <li><span style='color:${color}'>${i}</span></li>\n`
    }
    string += `</ul>`;
    console.log(string);
}

solve(10);