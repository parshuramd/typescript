function add(n1: number, n2: number, showRes: Boolean, phrase: string) {
  const res = n1 + n2;
  if (showRes) {
    console.log(`${phrase}${res}`);
  } else {
    return res;
  }
}

const printRes = true;
const resultPhrase = "Result is: ";
add(2, 2, printRes, resultPhrase);
