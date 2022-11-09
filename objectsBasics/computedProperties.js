let fruit = prompt("Which fruit to buy?", "Apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bag.apple); // 5
