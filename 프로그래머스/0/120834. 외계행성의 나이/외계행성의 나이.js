function solution(age) {
    var answer = '';
    const list = Array(10).fill().map((v, i) => String.fromCharCode(i + 97));
    answer = Array.from(age.toString()).map(v => list[v]).join('');
    
    return answer;
}