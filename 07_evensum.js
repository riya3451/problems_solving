function sumEvenNumbers(n) {
  var sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

let sum = sumEvenNumbers(10);
console.log(sum);
