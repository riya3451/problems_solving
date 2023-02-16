const max = require("./04_maths");

function lcm(a, b) {
  let m = a * b;
  let maximum = max(a, b);

  for (let i = maximum; i <= m; i++) {
    if (i % a === 0 && i % b === 0) {
      let lc = i;
      return lc;
    }
  }
}

let l = lcm(10, 20);
console.log(l);
