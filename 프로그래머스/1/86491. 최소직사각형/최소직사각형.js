function solution(sizes) {
  const sortedSize = sizes.map(([w, h]) => {
    return w < h ? [h, w] : [w, h];
  });

  const width = sortedSize.map((s) => s[0]);
  const height = sortedSize.map((s) => s[1]);

  const maxWidth = Math.max(...width);
  const maxHeight = Math.max(...height);

  return maxWidth * maxHeight;
}