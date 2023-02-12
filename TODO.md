# TODO list for the Devtools stack



### General


### Python app manager

- [ ] Longbranch Vinaigrette integration
	- [ ] Apps that have 'priority' set to core.
		- [ ] Automatically install dependencies and run.
- [X] On start, check for app dependencies and install them.
	- [X] Python packages
	- [X] Node modules
- [ ] On git pull
	- [ ] If they are running, automatically restart them.

### Longbranch Vinaigrette Website

- [X] Make a functional website
  - [X] The website must be able to communicate with the backend server dev-gui
  <!-- Use \() to escape parethenses -->
- [ ] \(Optional\) Make it look nice :D
- [ ] Apps
  - [ ] App
    - [X] Show app status.
    - [X] Make operations on the given app(like start, stop, etc.).
    - [X] Edit .env variables.
    - [ ] Auto-Detect app type(whether it's Node.js, python, rust, etc.).

### Apps/libraries

- [X] Git config and .gitmodules parser/encoder, for this the specification is here [Configuration file](https://git-scm.com/docs/git-config#_configuration_file).
	- [X] Parser library for python

