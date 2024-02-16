function guineaPig(input) {
    let quantityFood = input.shift() * 1000;
    let quantityHay = input.shift() * 1000;
    let quantityCover = input.shift() * 1000;
    let weight = input.shift() * 1000;
    let weightAfter = weight / 3;
    let days = 30;

    for (let i = 1; i <= days; i++) {
        if (i <= 30) {
            quantityFood -= 300;
            if (i % 3 === 0) {
                quantityCover = quantityCover - weightAfter;
            }
            if (i % 2 === 0) {
                quantityHay -= (quantityFood * 5 / 100);

            }
        }
    }
    if (quantityCover > 0 && quantityFood > 0 && quantityHay > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFood / 1000).toFixed(2)}, Hay: ${(quantityHay / 1000).toFixed(2)}, Cover: ${(quantityCover / 1000).toFixed(2)}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }


}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);

