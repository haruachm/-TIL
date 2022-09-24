### 코드

```c
#include <sys/types.h>
#include <stdio.h>
#include <unistd.h>

int main()
{
        pid_t pid;

        pid = fork();

        if(pid < 0) {
                fprintf(stderr, "Fork Failed");
                return 1;
        }
        else if (pid ==0) {
                printf("Executing Is command from child pid %d\n", getpid());
                execlp("/bin/ls", "ls", NULL);
        }
        else {
                printf("Execution from parent pid %d\n", getpid());
                wait(NULL);
                printf("child complete\n");
        }
        return 0;
}
```

### 출력값

```c
Execution from parent pid 22496
Executing Is command from child pid 22497
process  process.c  process.o
child complete
```
