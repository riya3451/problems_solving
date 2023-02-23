function recursionFactorial(n) {
  if (n == 1) {
    return 1;
  }
  recursionFactorial(n - 1);
  return n * recursionFactorial(n - 1);
}

let f = recursionFactorial(5);
console.log(f);
