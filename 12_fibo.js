function fibo(n) {
  var n1 = 0;
  var n2 = 1;
  var n3;
  console.log(0);
  for (let i = 0; i <= n; i++) {
    n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
  }
  return { n3 };
}

let f = fibo(5);
console.log(f);
