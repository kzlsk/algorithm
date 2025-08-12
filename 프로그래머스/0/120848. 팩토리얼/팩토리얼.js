function solution(n) {
    var answer = 0;
    let fac = 1;
    const result = Array.from({length: 10}, (_, i) => {
        fac *= i + 1;
        return fac;
    });
    answer = result.reduce((acc, cur, idx) => {
        if(cur <= n) return idx + 1;
        else return acc;
    }, 0);
    return answer;
}