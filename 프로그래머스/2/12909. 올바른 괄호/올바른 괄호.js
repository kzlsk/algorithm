function solution(s){
    const stack = [];
    
    for(let door of s){
        if(door === "("){
            stack.push(door);
        } else {
            if(stack.length === 0){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}