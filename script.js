let x = document.querySelector('#place');
let exp = "";

function calculator(data) {
    exp += data;
    document.querySelector('#place input').value = exp;
}
function result() {
    let res = eval(exp);

    // Check if the length of the result is greater than 4
    if (res.length > 4) {
        res = res.substring(0, 5); // Get the first 5 characters
    }

    document.querySelector('#place input').value = res;
}



function destroy() {
    let slicedString = exp.slice(0, -1);
    exp = slicedString;
    document.querySelector('#place input').value = exp;
}
function clearall() {
    document.querySelector('#place input').value = "";
    exp = ""; // Reset exp to an empty string
}

