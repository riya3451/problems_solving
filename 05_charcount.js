/* search a string and extract a character and check whether it is capital, small letter,number or special  */

function charCount(text) {
  var upper = 0;
  var lower = 0;
  var number = 0;
  var special = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= "A" && text[i] <= "Z") {
      upper++;
    } else if (text[i] >= "a" && text[i] <= "z") {
      lower++;
    } else if (text[i] >= "0" && text[i] <= "9") {
      number++;
    } else {
      special++;
    }
  }
  return { upper, lower, number, special };
}

let str = charCount("ErtHu545$#");
console.log(str);
