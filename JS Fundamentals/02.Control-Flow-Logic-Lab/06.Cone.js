function calcCone(r, h) {
    let volume = (1 / 3) * Math.PI * (r * r) * h;
    let s = Math.sqrt(r * r + h * h);
    let area = Math.PI * r * r + Math.PI * r * s;

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}

calcCone(3, 5);