function addValues(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
const callback = (res) => {
  console.log("callback", res);
};
addValues(12, 23, callback);
