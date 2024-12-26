//your JS code here. If required.
document.getElementById("incrementBtn").onclick = function () {
    const counterElement = document.getElementById("counter");
    alert(counterElement.textContent);
    counterElement.textContent = parseInt(counterElement.textContent, 10) + 1;
};
