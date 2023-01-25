# DevTools Standards

The following standards are a MUST for this stack to work properly\

# .gitignore

The .gitignore MUSt ignore the following files


```
# Data stuff
local_data.json
local_settings.json
pid
.cache

# For pycharm
.idea/
```


# settings.json

Every DevTools app MUST have a settings.json file, the specification of this file is\
right here ./settings.json.default.js\

## Commands

The commands that the user is able to run at the root of the app\

### Start command

The start command SHOULD capture the pid of the app whenever possible and create the\
./pid file where it will be stored, this can be done by the following command:\


```bash
[RUN_APP_COMMAND] & echo $! > ./pid
```


Where [RUN_APP_COMMAND] is the command you use start the app.\
The only exception is when the pid is not the one where the actual app is running, in\
that case the user should create its own method to start the app and capture the pid.\


# Folder/Files Structure

In this section I'll explain how the folders/files should be structured for every app.\

## Folder 'src' structure

All app logic MUST reside on the src subfolder.\
The 'src' subfolder, must be at the root of the app, e.g:\
/my_project\
| /.gitignore\
| /README.md\
| /app\
| | /main.py\
| | /src <-- 'src' subfolder here\

### Submodules

On any project using submodules, the submodules MUST be added/cloned on the src/submodules\
folder, the 'src' folder MUST be at the root of the app, e.g:\
/my_project\
| /.gitignore\
| /README.md\
| /app\
| | /main.py\
| | /src					<-- The 'src' folder is at app root folder\
| | | /submodules <-- Add submodules here
