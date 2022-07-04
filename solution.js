//string.substring
const parkWalkStr = "I can walk in the park all day!";
console.log("Ex.1:", parkWalkStr.substring(18, 22));

//string.toUpperCase()
const helloStr = "Hello World";
console.log("Ex.2:", helloStr.toUpperCase());

//string.toLowerCase()
const earthlingsStr = "Hello Earthling";
console.log("Ex.3:", earthlingsStr.toLowerCase());

//string.substring
const jsStr = "JavaScript";
console.log("Ex.4:", jsStr.substring(3, 6));

//string.includes('some string')
const niceShoesStr = "nice shoes";
console.log("Ex.5:", niceShoesStr.includes("I"));
console.log("Ex.5:", niceShoesStr.includes("n"));

//6
const oldStr = "Morning";
const newStr = oldStr.charAt(0) + oldStr + oldStr.charAt(0);

console.log("Ex.6:", newStr);

//string.slice(start index, end index)
const scritcherStr = "Beautiful";
const lastThreeChars = scritcherStr.slice(-3);
console.log("Ex.7:", lastThreeChars);

//8
const boogieNightsStr = "Good";
const firstChar = boogieNightsStr.charAt(0);
const lastChar = boogieNightsStr.charAt(boogieNightsStr.length - 1);
const middleStr = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
console.log("Ex.8:", lastChar + middleStr + firstChar);

//string interpolation
const firstName = "Julia";
const city = "Berlin";
const job = "student in DCI";
console.log(
  `Ex.9: My name is ${firstName}. I live in ${city} and I am a ${job}`
);

//10
const foxStr = "the quick brown fox";
const capitalFirstChar = foxStr.charAt(0).toUpperCase() + foxStr.slice(1);
console.log("Ex.10:", capitalFirstChar);
