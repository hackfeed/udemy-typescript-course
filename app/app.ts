function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(res: number) {
  console.log("Result: " + res);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(1, 3));

let combineValues: (a: number, b: number) => number = add;

console.log(combineValues(3, 2));

addAndHandle(5, 7, (result) => {
  console.log(result);
});
