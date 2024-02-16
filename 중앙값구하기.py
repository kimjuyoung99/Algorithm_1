# 문제 설명
# 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 
# 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.


def solution(array):
    answer = 0
    for i in range(len(array)) : 
        for j in range(len(array)):
            if array[i] > array[j] : 
                tmp = array[i]
                array[i] = array[j]
                array[j] = tmp
    flag = len(array)//2 
# // 로 깔끔하게 몫 구하기. 이러면 정수형으로 형변환 할 필요가 없다.
    answer = array[flag]
            
        
        
    return answer


______________

# 모범답안 : 
def solution(array):
    return sorted(array)[len(array) // 2]

# sorted라는 라이브러리를 사용하면 엄청 간결하게 풀 수 있다.
# 그리고 //는 몫만 나오게 하는 나눗셈