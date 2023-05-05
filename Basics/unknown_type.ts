let userInput: unknown; // better choice than "any"
let userName: string;
userInput = 6;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}
