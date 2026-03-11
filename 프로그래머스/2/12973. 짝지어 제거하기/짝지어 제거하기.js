function solution(S) {
  const stack = [];

  for (const v of S) {
    if (stack.length === 0 || stack[stack.length - 1] !== v) {
      stack.push(v);
    } else {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}