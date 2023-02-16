function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function hcf(a, b) {
  let minimum = min(a, b);
  let m = a * b;

  for (let i = minimum; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      let hcf = i;
      return hcf;
    }
  }
}
let f = hcf(5, 10);
console.log(f);

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
}
let s = factorial(5);
console.log(s);
