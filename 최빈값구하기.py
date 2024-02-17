
# 문제 설명
# 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 
# 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
# ______________--
from collections import Counter

def solution(array):
    # 배열이 비어있는 경우 처리
    if not array:
        return -1
    
    # Counter를 사용하여 각 요소의 빈도수 계산
    count = Counter(array)
    
    # 가장 높은 빈도수 찾기
    max_frequency = max(count.values())
    
    # 최빈값 찾기
    mode = [num for num, freq in count.items() if freq == max_frequency]
    
    # 최빈값이 하나인 경우 그 값을 반환, 여러 개인 경우 -1 반환
    return mode[0] if len(mode) == 1 else -1