# 문제 설명
# 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

# ______________________________

def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
#유클리드 알고리즘을 통해 최대공약수 구하는 함수!

def solution(numer1, denom1, numer2, denom2):
    if denom1 == denom2 :
        result1 = numer1+numer2
        result2 = denom1 
    else :
        result2 = denom1 * denom2
        numer1 *= denom2
        numer2 *= denom1
        result1 = numer1 + numer2
    g = gcd(result1, result2)
    #최대공약로 각 분모와 분자를 나눈다
    result1 /= g
    result2 /= g
    
    answer = [int(result1), int(result2)]
    return answer

# ________________
# gcd 함수에 대해서 알게 되었다!