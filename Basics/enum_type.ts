enum Role {
  ADMIN,
  USER,
  AUTHOR,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("admin is admin");
}
