let user = { name: "John" };
let permission1 = { canView: true };
let permission2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permission1, permission2);

console.log(user.name);
console.log(user.canView);
console.log(user.canEdit);

// If the copied property name already exists, it gets overwritten:

Object.assign(user, { name: "Pete" });

// alert(user.name); // now user = { name: "Pete" }

let user2 = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user2);

console.log(clone.name); // John
console.log(clone.age); // 30
