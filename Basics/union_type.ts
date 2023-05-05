function add(
  input1: number | string,
  input2: number | string,
  resultCon: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultCon === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
console.log(add(22, 22, "as-number"));
console.log(add("22", "22", "as-number"));
console.log(add("22", 22, "as-text"));
