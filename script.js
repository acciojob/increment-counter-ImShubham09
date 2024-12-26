// //your JS code here. If required.
// document.getElementById("incrementBtn").onclick = function () {
//     const counterElement = document.getElementById("counter");
//     alert(counterElement.textContent);
//     counterElement.textContent = parseInt(counterElement.textContent, 10) + 1;
// // }

document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("incrementBtn");

    incrementButton.addEventListener("click", () => {
        const currentValue = parseInt(counterElement.textContent, 10);
        alert(Current value);
        counterElement.textContent = currentValue + 1;
    });
});
