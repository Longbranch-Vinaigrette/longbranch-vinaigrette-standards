# Settings

Every DevTools app MUST have a 'settings.json' file, the specification of this file is\
right here on [settings spec](../settings.json.spec.js)\

## Commands

The commands that the user is able to run at the root of the app\

## Setup

For python it's not necessary to create a "setup" command, because to setup the\
required packages, it should be done by checking the "dependencies" field\
on settings.json and if it has submodules you can check the ".gitmodules"\
file that git creates.\

### Start command

The start command SHOULD capture the pid of the app whenever possible and create the\
./pid file where it will be stored, this can be done by the following command:\


```bash
[RUN_APP_COMMAND] & echo $! > ./pid
```


Where [RUN_APP_COMMAND] is the command you use start the app.\
The only exception is when the pid is not the one where the actual app is running, in\
that case the user should create its own method to start the app and capture the pid.\
