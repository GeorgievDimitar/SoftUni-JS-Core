function calcArea(w, h, W, H) {
    let [s1, s2, s3] = [w * h, W * H,
        Math.min(w, W) * Math.min(h, H)];
    console.log(s1 + s2 - s3);
}

calcArea(13, 2, 5, 8); //56