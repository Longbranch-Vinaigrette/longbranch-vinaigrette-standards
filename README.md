# DevTools Standards

The following standards are a MUST for this stack to work properly\

## Submodules

On any project using submodules, the submodules MUST be added/cloned on the submodules\
folder on the root of the project, a small exception applies:\
If the app is not on the root of the repository, then the submodules folder MUST not be\
on the root of the repository, but at the root of the app.\
\
Example:\
/my_project\
| /.gitignore\
| /README.md\
| /app\
| | /main.py\
| | /submodules <-- Here\
