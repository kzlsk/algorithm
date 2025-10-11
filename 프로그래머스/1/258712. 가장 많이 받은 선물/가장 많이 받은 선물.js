function solution(friends, gifts) {
    const n = friends.length; // n은 친구 수
    const nameToIdx = {}; // 선물 수를 count 하기 위한 인덱스 매핑
    for(let i = 0; i < n; i++){
        nameToIdx[friends[i]] = i; // 인덱스 매핑
    }
    // muzi 0 ryan 1 frodo 2 neo 3
    
    // 인접 행렬 : giftCount[i][j] = i가 j에게 준 횟수
    // i가 j에게 준 횟수를 count 하기 위한 2차원 배열 (초기값 : 0)
    const giftCount = Array.from({length: n}, () => Array(n).fill(0));
    // 선물을 준 수를 count 하기 위한 1차원 배열 (초기값 : 0)
    const totalGiven = Array(n).fill(0);
    // 받은 횟수를 count 하기 위한  1차원 배열 (초기값 : 0)
    const totalReceived = Array(n).fill(0);
    
    // 기록 처리 => 주고 받은 선물 내역 
    for(const entry of gifts){
        // 공백으로 구분하여 이름만 뽑기
        const parts = entry.trim().split(/\s+/);
        if(parts.length < 2) continue; 
        
        const giver = parts[0]; // 준 사람
        const receiver = parts[1]; // 받은 사람
        
        // 인덱스로 변경
        const i = nameToIdx[giver] 
        const j = nameToIdx[receiver]
        
        giftCount[i][j] += 1;
        totalGiven[i] += 1;
        totalReceived[j] += 1;
    }

    // 선물 지수 계산
    const score = Array(n).fill(0); // 1차원 배열 생성
    for(let i = 0; i < n; i++){
        score[i] = totalGiven[i] - totalReceived[i];
    }
    
    // 받을 선물 수 계산
    const nextReceived = Array(n).fill(0);
    for(let i = 0; i < n; i++){
        for(let j =i + 1; j < n; j++){
            if(i === j) continue; // 자기 자신 비교 건너뛰기
            
            // 주고받은 선물 수를 계산하기 위함
            const aToB = giftCount[i][j];
            const bToA = giftCount[j][i];
            
            // a가 b한테 준게 더 많은 경우
            if(aToB > bToA){
                nextReceived[i] +=1;
                // b가 a한테 준게 더 많은 경우
            } else if (aToB < bToA){
                nextReceived[j] +=1;
            } else {
                // a와 b가 주고 받은 횟수가 동일한 경우 => 선물 지수로 계산
                if(score[i] > score[j]){
                    nextReceived[i] += 1;
                } else if(score[i] < score[j]){
                    nextReceived[j] += 1;
                }
            }
        }
    }
    
    return Math.max(...nextReceived);
}