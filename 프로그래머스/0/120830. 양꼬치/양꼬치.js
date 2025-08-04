function solution(n, k) {
    var answer = 0;
    let s = ~~(n / 10);
    answer = n * 12000 + k * 2000 - s * 2000;
    return answer;
}