"use strict";
function add(n1, n2, showRes, phrase) {
    const res = n1 + n2;
    if (showRes) {
        console.log(`${phrase}${res}`);
    }
    else {
        return res;
    }
}
const printRes = true;
const resultPhrase = "Result is: ";
add(2, 2, printRes, resultPhrase);
