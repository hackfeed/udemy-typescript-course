function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(res: number) {
  console.log("Result: " + res);
}

printResult(add(1, 3));

let combineValues: (a: number, b: number) => number = add;

console.log(combineValues(3, 2));
