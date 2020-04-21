enum Role {
  ADMIN = 0,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Sergey",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
