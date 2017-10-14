/* This program converts between celsius and fahrenheit and vice versa. 
Dylan Nichols version 1.0.0 - 2017 */

// connect the html to javascript variables
let temp = document.querySelector("#temp")
let unit = document.querySelector("#unit")
let output = document.querySelector("#output")
let submit = document.querySelector("#submit")
let reset = document.querySelector("#reset")
let error = document.querySelector("#error")

// calculate the temperatures with a switch statement
let convertTemp = (num, unit) => {
    let result = 0

    switch (unit) {
        case 1:
            result = num * 9 / 5 + 32
            break
        case 2:
            result = (num - 32) * 5 / 9
            break
    }
    output.value = result
}

let resetForm = () => {
    error.innerHTML = ""
}

// on submit, check input and if it is valid call the conversion function with the apporpriate parameters 
let submitForm = () => {
    error.innerHTML = ""
    let output = 0
    let input = temp.value
    let num = parseFloat(input)
    if (isNaN(num)) {
        error.innerHTML = "Invalid input. Please enter a temperature."
    } else {
        if (unit.value == "C" || unit.value == "c") {
            output = convertTemp(num, 1)
        } else if (unit.value == "F" || unit.value == "f") {
            output = convertTemp(num, 2)
        } else {
            error.innerHTML = "Invalid input. Please enter F or C for unit"
        }
    }
}

submit.addEventListener('click', (e) => {
        submitForm();
        e.preventDefault()
    }) // if user clicks submit, call the above function

reset.addEventListener('click', (e) => {
    resetForm()
    e.preventDefault
})