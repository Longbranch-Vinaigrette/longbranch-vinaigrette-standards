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
\
Example 2:\
/my_project\
	| /.gitignore\
	| /README.md\
	| /main.py\
	| /src <-- 'src' subfolder here\


### Submodules

On any project using submodules, the submodules MUST be added/cloned\
on the src/submodules folder, the 'src' folder MUST be at the root of\
the app, e.g:\
/my_project\
	|	/.gitignore\
	|	/README.md\
	|	/app\
	|	|	/main.py\
	|	|	/src <-- The 'src' folder is at app root folder\
	|	|	|	/submodules <-- Add submodules here
