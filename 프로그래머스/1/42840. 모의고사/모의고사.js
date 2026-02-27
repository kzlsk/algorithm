function solution(answers){
    const pattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    // map() 패턴 배열을 돌면서 각 수포자의 점수로 변환
    const scores = pattern.map((p) => {
        // 정답지를 filter()로 돌려, 정답인 것만 남긴 뒤 개수(length)를 반환
        return answers.filter((ans, i) => ans === p[i % p.length]).length;
    });
    
    // 최고 점수 확인
    const maxScore = Math.max(...scores);
    
    // 우승자 선별
    // 현재 점수(cur)가 최고 점수(maxScore)와 같으면 acc에 번호를 push, 아니면 그냥 통과
    return scores.reduce((acc, cur, idx) => {
        if(cur === maxScore) acc.push(idx + 1);
        return acc;
    }, []);
}