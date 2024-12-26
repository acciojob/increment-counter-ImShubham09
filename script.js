//your JS code here. If required.
document.getElementById("incrementBtn").onclick = function () {
    const counterElement = document.getElementById("counter");
    alert(`Current value: ${counterElement.textContent}`);
    counterElement.textContent = parseInt(counterElement.textContent, 10) + 1;
};
