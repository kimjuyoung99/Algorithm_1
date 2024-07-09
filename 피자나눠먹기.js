// 피자 나눠 먹기 (1)
// 문제 설명
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// ______________________________

function solution(n) {
    var result = 1, pice = 1;
    
    while(1){
        pice = result*7;
        if (pice >= n){
            return result;
        }
        result+=1;
    }   
}
// 거의 처음으로 인터넷 도움 없이 풀었음ㅋ
// 뭐... 끼워맞추기 식이었쥐만..

// 좋은 예시 

// function solution(n) {
//     return Math.ceil(n / 7)
// }

// Math에 대해서 잘 알아봐야겠다.