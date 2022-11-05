### 코드

```c
#include <sys/wait.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

int main(int argc, char *argv[]){
        int pipefd[2];
        pid_t pid;
        char buf;

        if(argc !=2)
        {
                fprintf(stderr, "Usage: %s %s\n", argv[0], "[message you want to send]");
                exit(EXIT_FAILURE);
        }
        if (pipe(pipefd) == -1)
        {
                fprintf(stderr, "%s", "The call to pipe() has filed. \n");
                exit(EXIT_FAILURE);
        }

        pid = fork();
        if (pid == -1)
        {
                fprintf(stderr, "%s", "The call to fork() has failed.\n");
                exit(EXIT_FAILURE);
        }
        if (pid == 0)
        {
                printf("I am the child.\n");
                close(pipefd[1]);
                printf("The child is about to read from the pipe.\n");
                while (read(pipefd[0], &buf, 1) > 0)
                write(STDOUT_FILENO, &buf, 1);
                write(STDOUT_FILENO, "\n", 1);
                close(pipefd[0]);
                printf("The child has just echoed from the pipe to standard output.\n");
                exit(EXIT_SUCCESS);
        }
        else
        {
                printf("I am the parent.\n");
                close(pipefd[0]);
                write(pipefd[1], argv[1], strlen(argv[1]));
                close(pipefd[1]);
                printf("The parent has just written data into the pipe.\n");
                printf("The parent will now wait for the child to terminate.\n");
                wait(NULL);
                exit(EXIT_SUCCESS);
        }
        return 0;
}
```

### 출력값

```c
$ ./pipe_test Iloveyou
I am the parent.
I am the child.
The parent has just written data into the pipe.
The child is about to read from the pipe.
The parent will now wait for the child to terminate.
Iloveyou
The child has just echoed from the pipe to standard output.
```
