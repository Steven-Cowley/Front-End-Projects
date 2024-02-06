function handleInput() {
    // stores the value of the year given by the user
    let userIn = document.getElementById("yearIn").value;
    // check if user has enterd a number
    if (isNaN(userIn)) {
        alert("Invalid entry please enter a year");
        return;
    }
    let year = 2024;
    // calculate age
    let userAge = year - userIn;
    handleOutput(userAge);
}

function handleOutput(age) {
    let output = document.getElementById("output");
    output.innerText = "Your age is " + age;
}
