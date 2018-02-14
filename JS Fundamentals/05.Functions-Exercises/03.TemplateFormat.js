function printXML(input) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`;
    for (let i = 0; i < input.length; i+=2) {
        xml += `  <question>\n`;
        let question = input[i];
        xml += `    ${question}\n  </question>\n  <answer>\n`;
        let answer = input[i+1];
        xml += `    ${answer}\n  </answer>\n`;
    }

    xml += `</quiz>`;
    console.log(xml);
}

printXML(['Who was the forty-second president of the U.S.A.?',
'William Jefferson Clinton', 'Dry ice is a frozen form of which gas?',
        'Carbon Dioxide']);