When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let user = { name: "John" };

let admin = user; // copy the reference
Now we have two variables, each storing a reference to the same object
