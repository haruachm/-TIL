# [Python] 크롤링 - 1. requests, re 정규식 표현

### **pip로 requests 모듈 설치**

```
pip install requests
```

### **requests import 및 응답코드 출력**

```
import requests
res = requests.get("http://naver.com")
print("응답코드 : ", res.status_code)
```

- requests 모듈 import
- 원하는 url 정보 get으로 넘겨줌.
- res 변수에 가져온 정보 담아줌.
- 실제로 잘 받아왔는지, 접속 권한, 서버 문제 등을 확인 하기 위해 응답 코드를 찍을 수 있는데
  - =>이는 **.status_code**로 알아본다. **응답코드 : 200**이면 정상적으로 받아온 것.

![https://blog.kakaocdn.net/dn/dJkCpe/btrPoRyOq7c/tOLyseiLgft8wzVaLr4Ij1/img.png](https://blog.kakaocdn.net/dn/dJkCpe/btrPoRyOq7c/tOLyseiLgft8wzVaLr4Ij1/img.png)

### **응답코드에 따라 에러 출력**

```
res.raise_for_status()
```

정상적으로 가져오면 문제가 없고, 정상적으로 스크래핑을 하지 못 하면 에러를 내버리며 프로그램을 끝낸다.

### **정보를 받아와 파일 생성**

```
with open("reGoogle.html", "w", encoding="utf-8") as f:
  f.write(res.text)
```

---

### **정규식 라이브러리**

```
import re
```

문자열 compile

```
import re

p = re.compile("ca.e")
```

- re.compile() : 어떤 형태의 정규식으로 컴파일 할 지를 정해준다.
- **.** : 하나의 문자를 의미 ex) (wa.e) -> wave, ware, wake
- ^ : 문자열의 시작 ex) (^de) : desk, destination, demon
- $ : 문자열의 끝 ex) (ce$) : face, nice

```
p = re.compile("ca.e")

m = p.match("cafe")
print(m.group())
```

- **match()** : 주어진 문자열의 처음부터 읽어가며 일치하는지 확인한다.
- match 가 되면 .group() 을 통해 일치하는 문자열 반환
- match 가 되지 않으면 에러 발생

```
import re

p = re.compile("ca.e")

def print_match(m):
  if m:
    print(m.group())#일치하는 문자열 반환
    print(m.string())#입력받은 문자열 그대로 출력
    print(m.start())#일치하는 문자열의 시작 index 출력
    print(m.end())#일치하는 문자열의 끝 index 출력
    print(m.span())#일치하는 문자열의 시작과 끝 index 함께 출력else:
    print("not match")

  m = p.search("cafelatte")
  print_match(m)
```

- **search()** : 주어진 문자열 중에 일치하는 게 있는지 확인
- print(m.group()) #일치하는 문자열 반환 print(m.string()) #입력받은 문자열 그대로 출력 print(m.start()) #일치하는 문자열의 시작 index 출력 print(m.end()) #일치하는 문자열의 끝 index 출력 print(m.span()) #일치하는 문자열의 시작과 끝 index 함께 출력
- **findall("careless")**  :일치하는 모든 것을 리스트 형태로 반환
- > 문장 내에서 일치하는 부분이 여러 개이면 리스트로 바꾸어 반환
