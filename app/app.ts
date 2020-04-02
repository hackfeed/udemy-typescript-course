const person = {
  name: "Sergey",
  age: 20,
  hobbies: ["Sports", "Cooking"]
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
