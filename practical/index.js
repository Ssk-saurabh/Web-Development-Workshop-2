function calculateFactorial() {
    // get value
    let num = document.getElementById("number").value;

    // convert to number
    num = parseInt(num);

    let result = document.getElementById("result");

    if (isNaN(num) || num < 0) {
        result.innerText = "Enter a valid non-negative number";
        return;
    }

    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    // display result
    result.innerText = `Factorial of ${num} is: ${fact}`;
}