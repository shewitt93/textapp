let x = "Hello mu name in mugisha";

let funny = [];

for (let i = 0; i < x.length; i++) {
  let letter = x[i];
  if (letter === " ") {
    funny.push(letter);
  } else {
    if (i % 2 === 0) {
      funny.push(letter.toUpperCase());
    } else {
      funny.push(letter.toLowerCase());
    }
  }
}
funny = funny.join("");
console.log(funny);
