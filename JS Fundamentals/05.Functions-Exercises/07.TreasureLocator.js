function findTreasure(input) {
    let tokelau = {x1: 8, x2: 9, y1: 0, y2: 1};
    let tuvalu = {x1: 1, x2: 3, y1: 1, y2: 3};
    let samoa = {x1: 5, x2: 7, y1: 3, y2: 6};
    let tonga = {x1: 0, x2: 2, y1: 6, y2: 8};
    let cook = {x1: 4, x2: 9, y1: 7, y2: 8};

    for (let i = 0; i < input.length; i+=2) {
        let c1 = input[i];
        let c2 = input[i+1];


        if (c1 >= tokelau.x1 && c1 <= tokelau.x2 && c2 >= tokelau.y1 && c2 <= tokelau.y2) {
            console.log('Tokelau');
        } else if (c1 >= tuvalu.x1 && c1 <= tuvalu.x2 && c2 >= tuvalu.y1 && c2 <= tuvalu.y2) {
            console.log('Tuvalu');
        } else if (c1 >= samoa.x1 && c1 <= samoa.x2 && c2 >= samoa.y1 && c2 <= samoa.y2) {
            console.log('Samoa');
        } else if (c1 >= tonga.x1 && c1 <= tonga.x2 && c2 >= tonga.y1 && c2 <= tonga.y2) {
            console.log('Tonga')
        } else if (c1 >= cook.x1 && c1 <= cook.x2 && c2 >= cook.y1 && c2 <= cook.y2) {
            console.log('Cook')
        } else {
            console.log('On the bottom of the ocean')
        }
    }
}

findTreasure([4, 2, 1.5, 6.5, 1, 3]);