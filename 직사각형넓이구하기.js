// https://school.programmers.co.kr/learn/courses/30/lessons/120860
function solution(dots) {
    const xMap = dots.map(dot => dot[0]);
    const yMap = dots.map(dot => dot[1]);
    console.log("xMap, yMap : ",xMap, yMap);
    
    const width = Math.max(...xMap) - Math.min(...xMap);
    const height = Math.max(...yMap) - Math.min(...yMap);
    
    return width*height;
    
}