function handleInput() {
    let userIn = document.getElementById("yearIn").value;
    if (isNaN(userIn)) {
        alert("Invalid entry please enter a year");
        return;
    }
    let year = 2024;
    let userAge = year - userIn;
    handleOutput(userAge);
}

function handleOutput(age) {
    let output = document.getElementById("output");
    output.innerText = "Your age is " + age;
}