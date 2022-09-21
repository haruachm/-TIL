### 리눅스 명령어

- **디렉터리 이동**

`ls` 디렉터리의 컨텐츠 리스팅

`cd` 디렉터리 바꾸기

`pwd` 현재 실행 중인 디렉터리

`*` 와일드 카드

`?` 와일드 카드 0 or 1개 캐릭터

`.` 현재 디렉터리

`..` 디렉터리 한 단계 위

`~` 홈 디렉터리

`-` 이전 디렉터리

- **디렉터리 및 파일 수정**

`mkdir` 새로운 빈 디렉터리 생성

`rmdir` 빈 디렉터리 제거

`mv` 파일 이동

`cp` 파일 복제

`rm`파일 삭제

`chmod` 파일 permision 변경

- **터미널에 파일 보여주기**

`less` 터미널 window에 파일 보여주기

`cat` 파일 합치기

`head` 첫 10줄 보여주기

`tail` 마지막 10줄 보여주기

- **검색**

`grep` 파일에서 단어 검색

`find` 특정 단어, 디렉터리 경로 검색

- **파일 관리**

`wc` 워드 카운트

`sort` 입력을 영숫자로 정렬

`|` 다른 프로그램을 통한 파이프 / 필터 출력

`>` 표준 출력을 다음으로 리디렉션, 기존 파일을 덮어씀

`>>` 표준 출력을 리디렉션하고 연결

`<` 표준 입력 리디렉션 위치

`sed` row 작업

`awk` column 작업

- 작업/프로세스 관리

`&` 백그라운드 작업으로 실행

`jobs` 현재 프로세스 보여줌

`ps` 프로세스 보여줌

`top` 활동 중인 top 프로세스 보여줌

`kill` 작업 멈춤

`Ctrl-z` 현재 작업 정지

`Ctrl-c` 현재 작업 취소

`bg` 현재 실행 중인 프로세스 백그라운드 작업으로 전환

`fg` 백그라운드로 실행 중인 프로세스 포그라운드(foreground)로 전환

- **리모트 커넥션(Remote Connections)**

`ssh` Secure 쉘 로그인

`scp` Secure copy

`wget` URL로부터 파일 다운로드

`Ctrl-d` 로그인 나가기

- 추가적인 명령어

`man` 다른 명령어의 사용법을 확인

`sleep` 지정된 시간 동안 호출 프로세스를 일시 중단할 수 있는 명령줄 유틸리티

`touch`

`whoami`

`du`

`df`

`diff`

`echo`

`which`

`tar`

`history`

`alias`

`source`

### 초기 작업 명령어

- **git 관련 명령어**

`git branch` 현재 작업하고 있는 브랜치 이름 확인

`git branch 브랜치 이름` 브랜치 생성

`git checkout 브랜치 이름` 다른 브랜치로 작업 변경

`git branch -d 브랜치 이름` 브랜치 삭제

- **프로세스 관련 명령어**

`ps` 사용자와 관련된 프로세스 출력

`ps -l` -l은 긴 포맷으로 보여준다.

`ps -ef` : -e 모든 프로세스 출력 | -f 풀 포맷으로 출력

`ps - ef | grep sshd` : -grep 모든 프로세스 출력 값을 grep을 이용하여 sshd가 포함된 라인들로 출력

`sudo ls -l /proc/<child pid>/fd` : PID로 해당 프로세스의 파일 디스크립터(File Descriptor) 정보 확인

`proc` : ps한 시점에 proc에서 검색한 cpu 사용량

`top` : proc에서 일정 주기로 합산해 cpu 사용율 출력

→ **리눅스** **top 명령어 정리** [https://zzsza.github.io/development/2018/07/18/linux-top/](https://zzsza.github.io/development/2018/07/18/linux-top/)

### 스레드 명령어

`tid = pthread_self();` | 자신의 스레드 아이디 출력
