function printMultTable(n) {
    let html = `<table border='1'>\n`;
    html += `   <tr><th>x</th>`;
    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }

    html += `</tr>\n`;

    for (let row = 1; row <= n; row++) {
        html += `   <tr>`;

        for (let col = 1; col <= n; col++) {
            if(col==1) {
                html += `<th>${col * row}</th>`;
            }
            html += `<td>${col * row}</td>`;
        }
        html += `</tr>\n`;
    }

    html += `</table>`;
    console.log(html);
}

printMultTable(5);