function solution(brown, yellow) {
   const sum = brown + yellow;
    
    for(let h = 3; h <= Math.sqrt(sum); h++){
        if(sum % h === 0){
            let w = sum / h;
            
            if((w-2) * (h-2) === yellow){
                return [w, h];
            }
        }
    }    
}