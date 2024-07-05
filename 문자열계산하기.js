// https://school.programmers.co.kr/learn/courses/30/lessons/120902
function solution(my_string) {
    let arr = my_string.split(' ');
    let result = parseInt(arr[0]);
    console.log(result);
    //하나씩 분리
    
    console.log(arr);

    for(let i = 1 ; i < arr.length ; i++){
        let operater = arr[i];
        let num = parseInt(arr[i+1]);
    
        if(operater == '+') result+=num;
        if(operater == '-') result-=num;
    }
    
    return result;
}