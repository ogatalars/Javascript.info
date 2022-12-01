// sually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.
// In other words, return with an object returns that object, in all other cases this is returned.

function BigUser() {
  this.name = "Ogata";
  return { name: "Titanic" }; // return this object
}
console.log(new BigUser().name); // Titanic
