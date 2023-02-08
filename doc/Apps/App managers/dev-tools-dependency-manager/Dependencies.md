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

## Implementation

For implementation progress and/or ideas check [TODO](./TODO.md).

This features are for the main app, the app will be divided by parts and each part \
will have a dependency manager for its respective language built in its \
respective language. \

This app will then be in charge of running these isolated dependency managers \
and begin the installation of an app dependencies. \

The idea behind making these dependency managers separated \
from each other are these: \

* To make the repositories public.
* To work more like a professional.
* More isolation = better.
* It will be specific to the language itself, so there's less room for errors.

The user should also be able to use these dependencies managers as \
modules(nodejs), packages(python, rust, etc.) or submodules(any). \

Every path dependency MUST be saved on the database, just like this app \
when cloning  or pulling by using the following keyword: \
Keyword: path_repository_\[REPOSITORY NAME\] \

Where \[REPOSITORY NAME\] is the repository name.

## Methods

Here's a list of methods on how to check dependencies for repositories/apps, listed
from more efficient to least efficient.

You SHOULD implement the first and the second only.

### First method

On git pull, check the dependencies of that repository, if it's installed don't do
anything if not install it.

WARNING: This doesn't work for Node.js, which downloads dependencies locally
instead of globally like python, rust, etc.

### Second method

When pulling or cloning a repository, check it's importance(whether it's optional
or core), if it's core install its dependencies right there, if it's optional
and the user allowed optional repositories to be installed, then do the same
for it.

### Third method(least efficient)

First you compile(collect, list) all the dependencies of every app of that language.
You store this list on a database, and then on the frontend compare which ones are
installed and which ones aren't.

