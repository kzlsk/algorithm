function solution(N, stages) {    
   let players = stages.length;
    const failRates = [];
    
    // 스테이지별 도전자
    const challengers = new Array(N + 2).fill(0);
    for(const stage of stages){
        challengers[stage] += 1;
    }
    
    // 실패율 계산
    for(let i = 1; i <= N; i++){
        let rate = 0;
        if(players > 0){
            rate = challengers[i] / players;
            players -= challengers[i];
        }
        // 스테이지와 실패율 같이 저장
        failRates.push({ stage : i, rate : rate });
    }
    
    failRates.sort((a,b) => {
        if(b.rate === a.rate){
            return a.stage - b.stage;
        }
        return b.rate - a.rate;
    });
    
    return failRates.map(item => item.stage);
    
    
}