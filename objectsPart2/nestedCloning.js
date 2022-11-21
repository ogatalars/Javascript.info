let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(user.sizes.height); // 182

let clone = Object.assign({}, user);
console.log(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width = 60; // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one
