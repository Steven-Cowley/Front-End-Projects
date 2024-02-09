function handleInput() {
    let amountEntered = document.getElementById("input").value;
    if (isNaN(amountEntered)) {
        alert("invalid entry");
        return;
    }
    let tip = amountEntered * 0.20;
    handleOutput(tip);
}

function handleOutput(total) {
    let output = document.getElementById("output");
    output.innerText = "your tip will be " + total;
}