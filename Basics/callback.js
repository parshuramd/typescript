"use strict";
function addValues(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
const callback = (res) => {
    console.log("callback", res);
};
addValues(12, 23, callback);
