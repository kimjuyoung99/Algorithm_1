// https://school.programmers.co.kr/learn/courses/30/lessons/120862
function solution(numbers) {
    let n=numbers.length;
    numbers.sort((a,b)=>b-a);
    
    if(numbers[0]*numbers[1] > numbers[n-1]*numbers[n-2]) return numbers[0]*numbers[1];
    else return numbers[n-1]*numbers[n-2];
    
    return answer;
}

//- * - 의 관계를 생각해야 해서 일단 내림차순으로 정렬 후
// 가장 앞 두자리 곱과 가장 뒤 두 자리 곱중 큰 값을 return