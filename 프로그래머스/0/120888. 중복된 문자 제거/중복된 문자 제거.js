function solution(my_string) {
    var answer = '';
    const set = new Set(my_string);
    answer = [...set].join('');
    return answer;
}