let user = {
  name: "Mari",
  age: 36,
};

user.sayHi = function () {
  console.log("Hello!");
};
user.sayHi();

// Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the object.

// Then we can call it as user.sayHi(). The user can now speak!

// A function that is a property of an object is called its method.
//So, here we’ve got a method sayHi of the object user.
