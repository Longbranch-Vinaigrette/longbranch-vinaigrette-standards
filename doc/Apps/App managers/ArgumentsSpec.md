# Arguments spec

This is to unify the arguments given to any app manager application. \

## Arguments

### --path: For the app path

The '--path \[APP PATH\]' argument is the path where the app is located on the system.

### --start: Run the application

The '--start' argument is to run the application, note that before running the \
application a few things must be done: \
1. Install dependencies
2. Build(optional sometimes)
3. Run the app

### --stop: To stop the application

The '--stop' argument stops the application. \
Note that you must have implemented the [PID's spec](./Pids.md)

### --rock-hard-stop: To really stop the application for good

This command stops an app, subprocesses, and even zombie processes because
it uses the cwd instead of pid's to kill processes.

Implement it with this spec [Rock hard stop command](./RockHardStopCommand.md).
