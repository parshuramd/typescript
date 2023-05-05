const person: {
  hobbies: string[];
} = {
  hobbies: ["play", "watch", "see", "read"],
};
const hobbies = ["play", "watch", "see", "read"];
for (const hobby of person.hobbies) {
  console.log(hobby);
}
