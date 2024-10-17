// https://school.programmers.co.kr/learn/courses/30/lessons/120868
function solution(sides) {
    let answer = 0, a = 1;

    if(sides[0]>sides[1]) {
        a = sides[0]-sides[1]+1;
        while(a < sides[0]){
            a++;
            answer++;
        }
        while(a < sides[1] + sides[0]) {
            a++;
            answer++;
        }
    } else {
        a = sides[1]-sides[0]+1;
        while(a < sides[1]){
            a++;
            answer++;
        }
        while(a < sides[1] + sides[0]) {
            a++;
            answer++;
        }
    }
    return answer;
}
//모범답안
function solution(sides) {
    let a = Math.min(...sides)
    let b = Math.max(...sides)
    let answer = 0
    for(let i = 1 ; i < a+b ; i++){
        let arr = [a,b,i].sort((a,b) => a-b)
        let [q,w,e] = arr
        if(q+w > e){
            answer++
        }
    }
    return answer;
}
