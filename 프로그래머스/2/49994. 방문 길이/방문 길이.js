// 좌표 평면 범위 벗어나는지 확인
function isValidMove(nx, ny){
    return nx >= -5 && nx <=5 && ny >= -5 && ny <= 5;
}

// 좌표 결정
function updatedLocation(x, y, dir){
    switch(dir){
        case 'U' : 
            return [x, y + 1];
        case 'D' :
            return [x, y - 1];
        case 'R' : 
            return [x + 1, y];
        case 'L' :
            return [x - 1, y];
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    
    // 겹치는 좌표 중복 제거
    const visited = new Set();
    for(const dir of dirs){
        const [nx, ny] = updatedLocation(x, y, dir);
        
        if(!isValidMove(nx, ny)){
            continue;
        }
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);
        
        [x, y] = [nx, ny];
    }
    return visited.size / 2;
}