const rangeInputs = document.querySelectorAll(".price-range__ranges input"),
    priceInputs = document.querySelectorAll(".price-range__inputs input"),
    progress = document.querySelector(".price-range__progress");
let priceGap = 1000;

priceInputs.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputs[0].value),
            maxPrice = parseInt(priceInputs[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInputs[1].max) {
            if (e.target.classList.contains("price-range__input--min")) {
                rangeInputs[0].value = minPrice;
                progress.style.left = ((minPrice / rangeInputs[0].max) * 100) + "%";
            } else {
                rangeInputs[1].value = maxPrice;
                progress.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputs.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputs[0].value),
            maxVal = parseInt(rangeInputs[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.classList.contains("price-range__range--min")) {
                rangeInputs[0].value = maxVal - priceGap
            } else {
                rangeInputs[1].value = minVal + priceGap;
            }
        } else {
            priceInputs[0].value = minVal;
            priceInputs[1].value = maxVal;
            progress.style.left = ((minVal / rangeInputs[0].max) * 100) + "%";
            progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
        }
    });
});
