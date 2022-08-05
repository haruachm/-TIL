#PyPy3로 제출해야 정답. 
import sys

num = int(sys.stdin.readline())

if (num == 2):
    a, b = map(int, sys.stdin.readline().split())
    for i in range(1, a + 1):
        if (a % i == 0 and b % i == 0):
            print(i)

if (num == 3):
    a, b, c = map(int, input().split())
    for i in range(1, a + 1):
        if (a % i == 0 and b % i == 0 and c % i == 0):
            print(i)
