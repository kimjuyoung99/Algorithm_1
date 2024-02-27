# 문제 설명
# 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

# _______________

def solution(n):
    answer = []
    
    for i in range(1, (n // 2) + 1):
        answer.append(i * 2 - 1)
    
    return answer

# ____________________

# Math.round(n / 2),
# answer.push(i * 2 -1);
# 에 대해 새롭게 알게 되었다

# 정수 변환을 위한 자바스크립트 함수: 자바스크립트에는 int 함수가 없습니다. 숫자를 정수로 변환하기 위해 JavaScript는 일반적으로 Math.floor(), Math.ceil(), Math.round()와 같은 메서드 또는 소수 부분을 자를 수 있는 비트 연산자를 사용합니다.

# 올바른 반올림 또는 자르기 방법:

# Math.floor(n)은 n을 가장 가까운 정수로 내림합니다.
# Math.ceil(n)은 n을 가장 가까운 정수로 반올림합니다.
# Math.round(n)은 n을 가장 가까운 정수로 반올림하여 동점일 때 반올림합니다.
# n | 0은 0과 함께 비트별 OR을 사용하여 n을 정수로 자르고 소수 부분을 효과적으로 삭제합니다.