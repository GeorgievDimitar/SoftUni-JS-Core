function calcDistance([v1, v2, t]) {
    let dist1 = (v1 * 1000) * (t / 3600);
    let dist2 = (v2 * 1000) * (t / 3600);
    let delta = Math.abs(dist1 - dist2);

    console.log(delta);
}

calcDistance([5, -5, 40]);