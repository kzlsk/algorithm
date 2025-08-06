function solution(num_list) {
    var answer = [];
    const odd = num_list.filter(v => v % 2 === 0).length;
    const even = num_list.filter(v => v % 2 !== 0).length;
    answer.push(odd);
    answer.push(even);
    return answer;
}