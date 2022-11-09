let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
let multiplyNumeric = (obj) => {
  for (let chave in obj) {
    if (typeof obj[chave] == "number") {
      obj[chave] *= 2;
      console.log(obj);
    }
  }
};
multiplyNumeric(menu);
// console.log(multiplyNumeric(menu));
