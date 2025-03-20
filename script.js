let stepCount = 0;

document.addEventListener("click", function() {
    stepCount++;
    document.getElementById("stepCount").innerText = stepCount;
});
