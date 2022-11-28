let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },
};

user.sayHi(); // John
// Here during the execution of user.sayHi(), the value of this will be user.

// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//       alert(user.name); // "user" instead of "this"
//     }

//   };

// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.
