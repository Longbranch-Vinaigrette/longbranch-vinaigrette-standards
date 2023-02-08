# Rock hard stop command

I consider a Rock hard stop command, a command to stop an app extremely powerful \
and precise at the same time:

1. By powerful I mean no zombie process spawned by the app will be left alive. \
	And no subprocess spawned by the app will be left alive either.
2. By precise I mean, that it will exactly kill the application process and \
	subprocesses, never killing another kind of process.

To accomplish this we use the Current Working Directory(from now on cwd) \
to find the app and subprocess, this works extremely well, I've already \
implemented this on python and is 99.9% failure free.

The problem is that it might be computing-expensive.

## Implementation

The implementation it's easy, just get every pid on the system and then \
retrieve every process cwd, one you've done that you can check which one \
is the correct one and just Finish Him.

To get the cwd by pid checkout this [Question on stackoverflow](https://unix.stackexchange.com/questions/94357/find-out-current-working-directory-of-a-running-process) \

Here's one of the commands mentioned in an answer:


```bash
readlink -e /proc/<PID>/cwd
```


Where <PID> is the app pid.

