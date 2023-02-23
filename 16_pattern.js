function pattern() {
  let str = "";
  for (let i = 0; i < 5; i++) {
    //print space i times
    for (let j = 0; j < i; j++) {
      str += " ";
    }

    //print star 5 - i times
    for (let j = 0; j < 5 - i; j++) {
      str += "*";
    }

    str += "\n";
  }
  console.log(str);
}
pattern();
