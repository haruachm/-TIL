#피로도 A, 일처리 B, 1시간 -피로도 C, 최대 피로도 M
import sys

A, B, C, M = map(int, sys.stdin.readline().split())

hour = 0 #하루 24시간
pirodo = 0 #피로도 체크
work = 0

while(hour != 24): #하루 24시간
  hour += 1
  if(pirodo + A <= M): #최대 피로도와 비교
    pirodo += A
    work += B
  else: #최대 피로도 초과한 경우
    if(pirodo > M): #번아웃
      work = 0
      break
    else:
      pirodo -= C
      if(pirodo < 0):
        pirodo = 0

print(work)