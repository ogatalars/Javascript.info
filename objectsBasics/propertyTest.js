let user = {};
console.log(user.maquina === undefined); // true, true means "no such property"

let user2 = {
  name: "John",
  age: 40,
};

console.log("age" in user2);
console.log("X" in user2);
