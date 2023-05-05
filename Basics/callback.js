function addValues(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var callback = function (res) {
    console.log("callback", res);
};
addValues(12, 23, callback);
