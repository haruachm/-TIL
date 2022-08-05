### 깃 초기화

```bash
$ git init
```

- **$**는 명령어 입력을 기다리는 커서
- Initialized empty Git repository 가 나오면 성공
- 해당 명령어를 입력하면 **[.git]**라는 폴더 자동 생성
- [.git] 폴더에는 Git으로 **생성한 버전들의 정보와 원격저장소 주소** 등이 들어 있다.
- [.git] 폴더는 **로컬저장소**라고 불린다.
- 로컬저장소를 만들면 해당 폴더에서 버전 관리를 할 수 있다.

### 버전 관리

1. **내 정보 등록하기**

```bash
$ git config --global user.email "@naver.com"

$ git config --global user.name "이름 입력"
```

2. **커밋에 추가할 파일 선택**

```bash
$ git add 추가할 파일
```

3. **커밋 상세 설명 설정**

```bash
$ git commit -m "사이ㅡ 설명 추가"
```

4. **다른 커밋으로 시간 여행 하기**
   - 지금까지 만든 커밋 아이디 확인하기.

```bash
$git log
```

```bash
$git checkout [log주소]
```

### 원격저장소에 올리기

1. 로컬저장소 위치에서 해당 명령어를 입력한다.
2. remote add origin 명령어는 로컬저장소에 원격저장소 주소를 알려준다.

```bash
$ git remote add origin [깃주소]
```

3. 로컬저장소에 있는 커밋들 push 명령어로 원격 저장소에 올리기.

```bash
$ git push origin master
```

### 원격저장소의 커밋을 로컬저장소에 내려받기

→ 원격 저장소의 코드와 버전 전체를 내 컴퓨터로 내려받는 것을 ‘**클론**’이라고 한다.

- 깃허브의 Download ZIP으로도 소스코드를 똑같이 받을 수 있지만 그러면 **원격저장소와 버전 정보가 제외**된다.

```bash
$ git clone http:// .
```

→ 주소를 적고 한 칸 띄고 마침표를 찍어준다. ⇒ 이는 현재 폴더에 받으라는 의미로 점을 찍지 않으면 새로운 폴더가 생성된다.
