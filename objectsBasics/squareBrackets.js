let user = {
  name: "Something",
  age: 30,
  "Likes birds": true,
};

// console.log(user[name]);
console.log(user.age);
console.log(user["Likes birds"]);

let user2 = {};

// set
user2["likes birds"] = true;

// get
console.log(user2["likes birds"]); // true

// delete
delete user2["likes birds"];
