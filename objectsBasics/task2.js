function isEmpty(obj) {
  for (let something in obj) {
    return false;
  }
  return true;
}
let schedule = {};
let anotherTest = {
  outThere: "I am here all alone... I feel ...",
};

console.log(isEmpty(schedule));
console.log(isEmpty(anotherTest));
