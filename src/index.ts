function greetperson(name) {
  if (name === "Novel") {
    greet = "Hello Novel";
  } else {
    greet = "Hello";
  }
  console.log(greet);
  var greet;
}
greetperson("Novel");

var a = 1;
var b = 2;
if (a === 1) {
  var a = 2;
  let b = 3;
  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);