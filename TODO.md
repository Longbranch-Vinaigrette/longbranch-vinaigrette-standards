# TODO list for the Devtools stack



### General

<!-- Only for apps Devtools compatible and not deprecated should this be done -->
<!-- Also a flag like "core": true, should be added and one like "optional": true
to settings.json of every Devtools compatible package. -->
- [ ] Setup and build apps that are DevTools compatible automatically.
	- [ ] On start, check for app dependencies and install them.
		- [ ] Python packages
			- [ ] Get installed python packages list
			- [ ] Get a list of packages needed by the apps.
				- [ ] Install those who aren't
		- [ ] Node modules
			- [ ] Get installed modules list
			- [ ] Get a list of modules needed by the apps.
				- [ ] Install those who aren't
	- [ ] If they are running, automatically restart them.

### Devtools Website

- [X] Make a functional website
  - [X] The website must be able to communicate with the backend server dev-gui
  <!-- Use \() to escape parethenses -->
- [ ] \(Optional) Make it look nice :D
- [ ] Apps
  - [ ] App
    - [X] Show app status.
    - [X] Make operations on the given app(like start, stop, etc.).
    - [X] Edit .env variables.
    - [ ] Auto-Detect app type(whether it's Node.js, python, rust, etc.).

### Apps/libraries

- [X] Git config and .gitmodules parser/encoder, for this the specification is here [Configuration file](https://git-scm.com/docs/git-config#_configuration_file).
	- [X] Parser library for python

