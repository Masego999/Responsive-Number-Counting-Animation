let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    const endValue = parseInt(valueDisplay.getAttribute("data-val"), 10) || 0;
    const duration = endValue > 0 ? Math.max(Math.floor(interval / endValue), 1) : interval;
    const counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue >= endValue) {
            clearInterval(counter);
        }
    }, duration);
});
