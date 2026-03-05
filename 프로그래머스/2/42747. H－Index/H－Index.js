function solution(citations) {
  // 내림차순 정렬
  citations.sort((a, b) => b - a);

  let hIndex = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      hIndex = i + 1;
    }
  }
  return hIndex;
}