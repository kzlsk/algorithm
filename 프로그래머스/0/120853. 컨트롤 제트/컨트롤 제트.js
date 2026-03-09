function solution(s) {
  const arr = s.split(" ");
  const stack = [];

  for (const v of arr) {
    if (v === "Z") {
      stack.pop();
    } else {
      stack.push(Number(v));
    }
  }
  return stack.reduce((a, b) => a + b, 0);
}