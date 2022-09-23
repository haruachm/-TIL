```c
#include <sys/types.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>

#define BUFFER_SIZE 25

int main(void)
{
        char write_msg[BUFFER_SIZE] = "Greetings";
        char read_msg[BUFFER_SIZE];
        int fd[2];
        pid_t pid;

        if (pipe(fd) == -1) {
                fprintf(stderr,"Pipe failed");
                return 1;
        }

        pid = fork();

        if (pid < 0) {
                fprintf(stderr, "Fork Failed");
                return 1;
        }
        else if (pid > 0) {
                close(fd[0]);
                write(fd[1], write_msg, strlen(write_msg)+1);
                close(fd[1]);
        }
        else {
                close(fd[1]);
                read(fd[0], read_msg, BUFFER_SIZE);
                printf("read %s", read_msg);
                close(fd[0]);
        }
        return 0;
}
```
