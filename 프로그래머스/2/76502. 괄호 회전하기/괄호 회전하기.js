function solution(s) {
  let count = 0;
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    const stack = [];
    let isPairs = true;

    for (const v of rotated) {
      if (v === "(" || v === "{" || v === "[") {
        stack.push(v);
      } else {
        if (stack.length === 0 || stack[stack.length - 1] !== pairs[v]) {
          isPairs = false;
          break;
        }
        stack.pop();
      }
    }
    if (isPairs && stack.length === 0) {
      count++;
    }
  }
  return count;
}