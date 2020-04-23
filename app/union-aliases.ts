type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedAgesString = combine("30", "26", "as-number");
console.log(combinedAgesString);

const combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);
