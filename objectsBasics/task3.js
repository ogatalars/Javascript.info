let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let chave in salaries) {
  sum += salaries[chave];
  console.log(sum);
  console.log(chave);
}
console.log(sum);
