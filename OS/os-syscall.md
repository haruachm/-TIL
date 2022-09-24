### 시스템콜 함수

- file descriptor란? : 컴퓨터에 어떤 파일을 읽고 싶다면 OS는 디스크에서 해당 파일을 찾아 파일에 대한 정보를 메모리(DRAM)으로 보낸다. 이때 메모리 상에서 파일을 아래처럼 객체화 시키는데, 이때 객체의 포인터 주소를 **file descriptor** 라고 한다.

![Untitled (1)](https://user-images.githubusercontent.com/85959639/192093991-11278c1b-5e54-462d-be3f-1be41b2dca07.png)

![Untitled (2)](https://user-images.githubusercontent.com/85959639/192093997-44e2a4be-bb06-49a3-b948-3f4a795d23df.png)



### open( ) | close( )

```c
#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>

int open(const char *pathNAme, int flags, [mode_t mode]);
```

1. **첫 번째 인자** : 파일의 이름 또는 경로
2. **두 번째 인자** : 파일을 어떤 방식으로 open 할 것인지 지정
3. **파일의 접근 권한** : ex) 777이라면 사용자, 그룹, 다른 사용자에게 읽기/쓰기/수정 권한을 부여하는 것

### 리턴 값

함수가 **성공적으로 호출한다면 file descriptor** 값을 반환한다.

오류가 발생하면 **-1** 을 반환

![Untitled (3)](https://user-images.githubusercontent.com/85959639/192094002-1493edec-386c-4c4c-b619-0952b4657ac6.png)


```c
#include <unisted.h>

int close(int fd);
```

open 한 파일은 file descriptor을 리턴 받은 값으로 close를 한다.

오픈 한 파일은 작업을 수행한 뒤에 close를 해주어야 한다.

성공하면 **0**을 반환, 실패하면 **-1**을 반환

### read( ) | write( ) 함수

`ssize_t read(int fd, void *****buf, size_t nbytes);`

1. **첫 번째 인자** : file descriptor
2. **두 번째 인자** : 파일에 쓸 데이터의 메모리 공간에 대한 포인터
3. **세 번째 인자** : 파일에 쓸 데이터의 크기

- **read함수**는 파일에서 nbytes값의 크기만큼 바이트를 읽어서 buf에 저장합니다.
- 오류가 발생하면 -1을 반환하고 성공할 시 읽어온 바이트 수를 리턴합니다.

`ssize_t write(int fd, const void***** buf, size_t nbytes);`

1. 첫 번째 인자 : file descriptor
2. 두 번째 인자 : 파일에서 읽은 데이터를 저장할 메모리 공간
3. 세 번째 인자 : 파일에서 읽을 데이터의 크기

- **write함수**는 buf에서 nbytes값의 크기만큼 바이트를 읽어서 파일 기술자(fd)에 작성합니다.
- 오류가 발생하면 -1을 반환하고 성공할 시 쓰기를 수행한 바이트 수를 리턴합니다.
