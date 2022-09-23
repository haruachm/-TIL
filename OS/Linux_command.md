### read( ) | write( ) 함수

`ssize_t read(int fides, void *****buf, size_t nbytes);`

- **read함수**는 파일에서 nbytes값의 크기만큼 바이트를 읽어서 buf에 저장합니다.
- 오류가 발생하면 -1을 반환하고 성공할 시 읽어온 바이트 수를 리턴합니다.

`ssize_t write(int fildes, const void***** buf, size_t nbytes);`

- **write함수**는 buf에서 nbytes값의 크기만큼 바이트를 읽어서 파일 기술자(fd)에 작성합니다.
- 오류가 발생하면 -1을 반환하고 성공할 시 쓰기를 수행한 바이트 수를 리턴합니다.

### fd란

리눅스 시스템에서는 모든 것이 파일이다. 모든 객체와 행동은 파일로 관리된다.

리눅스에서는 프로세스가 이 파일에 접근할 때 File Descriptor 라는 개념을 이용하여 접근

![https://k.kakaocdn.net/dn/HM4vS/btrtWuekkIM/R8Inv3xVcqjkIL2IeiBh6k/img.png](https://k.kakaocdn.net/dn/HM4vS/btrtWuekkIM/R8Inv3xVcqjkIL2IeiBh6k/img.png)

fd 0 : 표준 입력 (stdin)

fd 1 : 표준 출력 (stdout)

fd 2 : 표준 에러 (stderr)

### 기본 지식

**`pid_t`** 프로세스 번호(pid)를 저장하는 타입(t)이라는 의미이다. 2~32768까지의 범위를 가지며 0번 프로세스는 부팅 후 바로 사라지고, 1번은 모든 프로세스인 init 프로세스이다.

### 리눅스 명령어

- **디렉터리 이동**

`**ls**` |디렉터리의 컨텐츠 리스팅

`**cd**` 디렉터리 바꾸기

`**pwd`\*\* 현재 실행 중인 디렉터리

`***`\*\* 와일드 카드

`**?`\*\* 와일드 카드 0 or 1개 캐릭터

`**.**` 현재 디렉터리

`**..**` 디렉터리 한 단계 위

`**~**` 홈 디렉터리

`**-**` 이전 디렉터리

- **디렉터리 및 파일 수정**

`**mkdir`\*\* 새로운 빈 디렉터리 생성

`**rmdir`\*\* 빈 디렉터리 제거

`**mv`\*\* 파일 이동

`**cp**` 파일 복제

`**rm**`파일 삭제

`**chmod**` 파일 permision 변경

- **터미널에 파일 보여주기**

`**less**` 터미널 window에 파일 보여주기

`**cat`\*\* 파일 합치기

`**head**` 첫 10줄 보여주기

`**tail`\*\* 마지막 10줄 보여주기

- **검색**

`**grep**` 파일에서 단어 검색

`**find`\*\* 특정 단어, 디렉터리 경로 검색

- **파일 관리**

`**wc`\*\* 워드 카운트

`**sort`\*\* 입력을 영숫자로 정렬

`**|`\*\* 다른 프로그램을 통한 파이프 / 필터 출력

`**>`\*\* 표준 출력을 다음으로 리디렉션, 기존 파일을 덮어씀

`**>>`\*\* 표준 출력을 리디렉션하고 연결

`**<**` 표준 입력 리디렉션 위치

`**sed`\*\* row 작업

`**awk`\*\* column 작업

- **작업/프로세스 관리**

`**&**` 백그라운드 작업으로 실행

`**jobs**` 현재 프로세스 보여줌

`**ps`\*\* 프로세스 보여줌

`**top`\*\* 활동 중인 top 프로세스 보여줌

`**kill`\*\* 작업 멈춤

`**Ctrl-z**` 현재 작업 정지

`**Ctrl-c**` 현재 작업 취소

`**bg`\*\* 현재 실행 중인 프로세스 백그라운드 작업으로 전환

`**fg`\*\* 백그라운드로 실행 중인 프로세스 포그라운드(foreground)로 전환

- **리모트 커넥션(Remote Connections)**

`**ssh`\*\* Secure 쉘 로그인

`**scp`\*\* Secure copy

`**wget`\*\* URL로부터 파일 다운로드

`**Ctrl-d**` 로그인 나가기

- **추가적인 명령어**

`**man`\*\* 다른 명령어의 사용법을 확인

`**sleep`\*\* 지정된 시간 동안 호출 프로세스를 일시 중단할 수 있는 명령줄 유틸리티

`**touch`\*\* 파일의 날짜와 시간을 수정하는 명령어, 그러나 0바이트 파일을 생성하기 위해 자주 사용되는 명령어

`**whoami`\*\* 현재 로그인한 사용자 ID를 출력하는 명령어

`**du`\*\* disk usage : 디렉토리와 파일 용량을 출력

`**df`\*\* disk free : 리눅스 전체의 디스크 여유 공간 확인

`**diff`\*\* differences : 두 파일 사이의 내용을 비교하는 명령어

`**echo`\*\* 인수로 전달되는 텍스트를 화면에 출력하는 명령어 printf 역할

`**which`\*\* 실행 가능한 명령어의 위치를 찾을 때 사용

`**tar`\*\* 여러 개의 파일을 하나의 파일로 묶거나 풀 때 사용하는 명령어

`**history`\*\* 전에 사용한 명령어를 순서대로 확인 가능

`**alias**` 리눅스의 기본 명령어나 긴 명령어를 사용자가 다른 이름으로 바꾸어 사용할 수 있는 별칭 명령어

`**source`\*\* 스크립트 파일을 수정한 후에 수정된 값을 바로 적용하기 위해 사용하는 명령어

### **git 관련 명령어**

[https://education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)

`**git config --global user.name “[firstname lastname]”**` : 버전관리를 위한 식별 이름 설정

`**git config --global user.email “[valid-email]”`\*\* : 기록 마커와 연관된 이메일 주소 설정

**`git init`** : 기존 디렉터리를 Git 저장소로 초기화

**`git clone [url]`** : URL을 통해 호스트 위치에서 전체 리포지토리 검색

**`git status`** : 작업 디렉터리에 수정된 파일 표시, 다음 커밋을 위해 준비

**`git add [file]`** : 지금 보이는 파일을 다음 커밋(단계)에 추가합니다

**`git reset [file]`** : 작업 디렉터리의 변경 내용을 유지하는 동안 파일 스테이징 해제

**`git diff`** : 어떤 파일의 수정 내용을 비교하는 명령어

`**git diff --stagedgit commit -m “[descriptive message]”**` : 스테이징된 콘텐츠를 새 커밋 스냅샷으로 커밋

- **브런치**

`**git branch**` : 현재 작업하고 있는 브랜치 이름 확인

`**git branch 브랜치 이름**` : 브랜치 생성

`**git checkout 브랜치 이름**` : 다른 브랜치로 작업 변경

`**git branch -d 브랜치 이름**` : 브랜치 삭제

### **프로세스 관련 명령어**

`**ps**` 사용자와 관련된 프로세스 출력

`**ps -l**` -l은 긴 포맷으로 보여준다.

ps -el : 시스템에 활

`**ps -ef**` : -e 모든 프로세스 출력 | -f 풀 포맷으로 출력

`**ps - ef | grep sshd**` : -grep 모든 프로세스 출력 값을 grep을 이용하여 sshd가 포함된 라인들로 출력

`**sudo ls -l /proc/<child pid>/fd**` : PID로 해당 프로세스의 파일 디스크립터(File Descriptor) 정보 확인

`**proc`\*\* ps한 시점에 proc에서 검색한 cpu 사용량

`**top`\*\* proc에서 일정 주기로 합산해 cpu 사용율 출력

→ **리눅스** **top 명령어 정리** [https://zzsza.github.io/development/2018/07/18/linux-top/](https://zzsza.github.io/development/2018/07/18/linux-top/)

### 스레드 명령어

`**tid = pthread_self();**` | 자신의 스레드 아이디 출력

### C언어 system 함수

- **exec 계열 함수**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82cf79b7-a27f-4db3-8925-46a7905c8caf/Untitled.png)

### 파이프 함수

UNIX는 파이프를 파일의 특수한 유형으로 취급하여 **read( )와 write( ) 시스템 콜을 사용하여 접근**할 수 있다.

`**pipe(int fd[])**` : 파이프 생성

`**fd[0]**` : 파이프의 읽기 종단

`**fd[1]**` 파이프의 쓰기 종단
