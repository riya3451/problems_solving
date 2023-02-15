/* take a number and find factorial of the number
 */
function factorial(n) {
  var f = 1;

  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
}

let fac = factorial(5);
console.log(fac);
