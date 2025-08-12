function solution(before, after) {
    const reverseBefore = before.split('').sort().join('');
    const reverseAfter = after.split('').sort().join('');
    return reverseBefore === reverseAfter ? 1 : 0;
}