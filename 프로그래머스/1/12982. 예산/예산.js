function solution(d, budget) {
  let count = 0;
  const sort = d.sort((a, b) => a - b);
  for (let i = 0; i < sort.length; i++) {
    if (sort[i] <= budget) {
      budget -= sort[i];
      count += 1;
    }
  }
  return count;
}