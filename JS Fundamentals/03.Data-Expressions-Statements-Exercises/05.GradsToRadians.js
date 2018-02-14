function convertGrads(grads) {
    grads %= 400;
    grads = grads < 0 ? grads + 400 : grads;
    grads *= (360 / 400);

    console.log(grads);
}

convertGrads(-50); //315