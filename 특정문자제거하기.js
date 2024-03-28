// 문제 설명
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// _________________

function solution(my_string, letter) {
    for(let i = 0 ; i <= my_string.length ; i++){
        if (my_string[i] == letter){
            my_string = my_string.replace(letter,'');
            i--;
        }
    }
    return my_string;
}
// ____________________

// replace 함수를 배웠다! 
// '' 빈 공간을 입력하면 그냥 그 자리의 배열이 빠진 채로 return 된다는 것을 알게 되었다