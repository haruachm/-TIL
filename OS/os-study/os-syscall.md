### 시스템콜 함수

- file descriptor란? : 컴퓨터에 어떤 파일을 읽고 싶다면 OS는 디스크에서 해당 파일을 찾아 파일에 대한 정보를 메모리(DRAM)으로 보낸다. 이때 메모리 상에서 파일을 아래처럼 객체화 시키는데, 이때 객체의 포인터 주소를 **file descriptor** 라고 한다.

![Untitled (1)](https://user-images.githubusercontent.com/85959639/192093991-11278c1b-5e54-462d-be3f-1be41b2dca07.png)

![Untitled (2)](https://user-images.githubusercontent.com/85959639/192093997-44e2a4be-bb06-49a3-b948-3f4a795d23df.png)

### fork( )

### #자식 프로세스 생성 (fork)

```c
#include <unistd.h>

pid_t fork(void);
```

새로운 프로세스를 생성하는 시스템 콜이다. 새롭게 생성된 자식 프로세스는 새로운 PID를 갖게되며 호출한 부모 프로세스를 그대로 복사합니다. 복사를 통해 자식 프로세스는 부모와 완전히 독립된 물리 메모리 공간을 갖는다.

### #fork( ) 리턴 값

- 자식: 0
- 부모: 자식의 PID
- 에러: -1 리턴하고 errno 설정

### dup( )

```c
#include <unistd.h>

int dup(int oldfd);
int dup2(int oldfd, int newfd);

//ex)
int main(){
    int fd1 = open("./password",O_CREAT | O_WRONLY, 0755);
    printf("fd1 is :: %d\n",fd1);
    write(fd1,"hello?\n",strlen("hello?\n"));
    int fd2 = dup(fd1);
    printf("fd2 is :: %d\n",fd2);
    write(fd2,"hi?\n",strlen("hi?\n"));
    return 0;
}
```

dup() 시스템 콜은 oldfd 파일 디스크립터의 복사본을 생성한다. 사용되지 않는 파일 디스크립터 값 중에 가장 낮은 숫자를 새로운 디스크립터 값으로 사용한다.

dup2() 시스템 콜은 oldfd의 복사본을 만드는 것은 동일하나 직접 newfd를 지정할 수 있다. 이미 open된 fd 값을 사용할 수 있다.

- 성공: 새로운 파일 디스크립터 리턴
- 에러: -1을 리턴하고 errno 설정

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

### pipe( )

UNIX는 파이프를 파일의 특수한 유형으로 취급하여 **read( )와 write( ) 시스템 콜을 사용하여 접근**할 수 있다.

`**pipe(int fd[])**` : 파이프 생성

`**fd[0]**` : 파이프의 읽기 종단

`**fd[1]**` 파이프의 쓰기 종단

### stat( ) | fstat( ) | lstat( )

**열려진 파일의 크기, 파일의 권한, 파일의 생성일시, 파일의 최종 변경일 등, 파일의 상태나 파일의 정보를 얻는 함수**로 pathname/fildes파일의 stat구조체를 리턴하는 시스템 호출 함수이다.

```c
#include<sys/stat.h>
#include<sys/types.h>
#include<unistd.h>
int stat(const char *restrict pathname, struct stat *restrict buf)
int fstat(int fd, struct stat *buf)
int lstat(const char *restrict pathname, struct stat *restrict buf)
```

**stat**

지정한 pathname(문자열 포인터)에 해당하는 파일에 대한 정보를 넣은 stat구조체를 buf로 리턴

**fstat**

지정 fd 오픈 확인하고 해당파일에 대한 정보를 넣은 stat구조체를 buf로 리턴

**lstat**

심볼릭 링크 파일 자체에 대한 정보를 넣은 stat구조체 자체 리턴

stat와 lstat는 첫 번째 인자로 절대경로를 넘겨주어야 하고, 두 번째 인자로 stat 구조체 주소를 넘겨줘야 한다.

fstat는 첫 번째 인자로 파일 디스크립터 번호를 인자로 받는다.

struct stat 에 대한 구조는 아래와 같다. 모두 파일 정보를 담은 구조체이다.

```c
struct stat {     
dev_t           st_dev;        /*ID of device containing file */     
ino_t            st_ino;          /*inode number*/     
mode_t       st_mode;     /*protection*/     
nlink_t         st_nlink;       /*number of hard links*/     
uid_t            st_uid;          /*user ID of owner*/     
gid_t            st_gid;          /*group ID of owner*/     
dev_t           st_rdev;        /*device ID (if special file)*/     
off_t             st_size;         /*total size, in byte*/     
blksize_t      st_blksize;    /*blocksize for file system I/O*/     
blkcnt_t       st_blocks;     /*number of 512B blocks allocated*/     
time_t;        st_atime;      /*time of last access*/     
time_t;        st_mtime;     /*time of last modification*/     
time_t         st_xtime;       /*time of last status change*/};
};
```
