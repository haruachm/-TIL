# Problem

## sleep ([easy](https://pdos.csail.mit.edu/6.S081/2022/labs/guidance.html))

Implement the UNIX program sleep for xv6; your sleep should pause for a user-specified number of ticks. A tick is a notion of time defined by the xv6 kernel, namely the time between two interrupts from the timer chip. Your solution should be in the file user/sleep.c.

Some hints:

- Before you start coding, read Chapter 1 of the [xv6 book](https://pdos.csail.mit.edu/6.S081/2022/xv6/book-riscv-rev3.pdf).
- Look at some of the other programs in  (e.g., , , and ) to see how you can obtain the command-line arguments passed to a program.
  user/
  user/echo.c
  user/grep.c
  user/rm.c
- If the user forgets to pass an argument, sleep should print an error message.
- The command-line argument is passed as a string; you can convert it to an integer using  (see user/ulib.c).
  atoi
- Use the system call .
  sleep
- See  for the xv6 kernel code that implements the  system call (look for ),  for the C definition of  callable from a user program, and  for the assembler code that jumps from user code into the kernel for .
  kernel/sysproc.c
  sleep
  sys_sleep
  user/user.h
  sleep
  user/usys.S
  sleep
- main should call  when it is done.
  exit(0)
- Add your  program to  in Makefile; once you've done that,  will compile your program and you'll be able to run it from the xv6 shell.
  sleep
  UPROGS
  make qemu
- Look at Kernighan and Ritchie's book *The C programming language (second edition)* (K&R) to learn about C.

Run the program from the xv6 shell:

```
      $make qemu
      ...
      init: starting sh
      $sleep 10
      (nothing happens for a little while)
      $

```

Your solution is correct if your program pauses when run as shown above. Run **make grade** to see if you indeed pass the sleep tests.

Note that **make grade** runs all tests, including the ones for the assignments below. If you want to run the grade tests for one assignment, type:

```
     $./grade-lab-util sleep
```

This will run the grade tests that match "sleep". Or, you can type:

```
     $make GRADEFLAGS=sleep grade
```

which does the same.
