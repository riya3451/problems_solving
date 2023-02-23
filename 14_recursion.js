function print(n) {
  if (n <= 0) {
    return;
  }
  print(n - 1);
  console.log(n);
}

print(10);

function printReverse(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  printReverse(n - 1);
}

printReverse(10);
