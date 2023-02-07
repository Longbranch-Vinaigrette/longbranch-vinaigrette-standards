# Apps/repositories dependency checking and installing

Of course, because this app downloads and updates repositories it MUST, not have
any dependencies, UNLESS it can install those dependencies itself.

## Dilema

### Standalone app

Should the app be separated? If so, how do I find where it's located?\
If the name 'Perseverancia-company' becomes standard, then it is easy to do.\
But what if I wan't to change it later on?\

What I can do, is detect when this app is cloned/pulled and store its path on\
the database.\
The keyword MUST be standard across all apps.\
Keyword: path_repository_dev-tools-dependency-manager \

- [X] Going to implement this one.

### Coupled to repository-mirror

If the app is coupled to repository-manager it's easier to do, but then\
if I wan't to check dependencies of repositories/apps at another time I wouldn't\
be able to do so.

## Implementation methods

The app MUST implement the following features:

* Checking importance level of an app.
* Installing dependencies.
* Check if the app has submodules(just check for the ./.modules file)
	* Installing/Updating submodules.
* Roaming
	* Checking every other app dependencies
	* This feature MUST not consume too much memory, use sleep() often.
* Receiving a path parameter which is an app
	<!-- This is how repository mirror will install dependencies -->
	* Subsequently checking if the app dependencies are satisfied.

### Methods

Here's a list of methods on how to check dependencies for repositories/apps, listed
from more efficient to least efficient.

You SHOULD implement the first and the second only.

#### First method

On git pull, check the dependencies of that repository, if it's installed don't do
anything if not install it.

WARNING: This doesn't work for Node.js, which downloads dependencies locally
instead of globally like python, rust, etc.

#### Second method

When pulling or cloning a repository, check it's importance(whether it's optional
or core), if it's core install its dependencies right there, if it's optional
and the user allowed optional repositories to be installed, then do the same
for it.

#### Third method(least efficient)

First you compile(collect, list) all the dependencies of every app of that language.
You store this list on a database, and then on the frontend compare which ones are
installed and which ones aren't.

