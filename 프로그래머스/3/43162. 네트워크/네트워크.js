function solution(n, computers) {
    let net = 0;
    const visited = Array(n).fill(false);
    
    function dfs(i){
        visited[i] = true;
        
        for (let j = 0; j < n; j++){
            if(i !== j && computers[i][j]===1 && !visited
               [j]){
                dfs(j);
            }
        }
    }
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            dfs(i);
            net++;
        }
    }
    return net;
}