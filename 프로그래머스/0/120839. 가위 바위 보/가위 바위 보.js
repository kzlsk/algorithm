function solution(rsp) {
    let result = [];
    return rsp.split('').map(cur => cur === '2' ? '0' : cur === '0' ? '5' : '2').join('');
}