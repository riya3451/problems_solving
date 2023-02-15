function reverseString(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr = newstr + str[i];
  }
  return newstr;
}

function isPallindrome(str) {
  let s = reverseString(str);

  if (str === s) {
    console.log("pallindrome");
  } else {
    console.log("not a pallindrome");
  }
}

let s = isPallindrome("evon");
// console.log(s);
