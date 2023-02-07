# Apps/repositories dependency checking and installing

Here's a list of methods on how to check dependencies for repositories/apps, listed
from more efficient to least efficient.

You SHOULD implement the first and the second only.

## First method

On git pull, check the dependencies of that repository, if it's installed don't do
anything if not install it.

WARNING: This doesn't work for Node.js, which downloads dependencies locally
instead of globally like python, rust, etc.

## Second method

When pulling or cloning a repository, check it's importance(whether it's optional
or core), if it's core install its dependencies right there, if it's optional
and the user allowed optional repositories to be installed, then do the same
for it.

## Third method(least efficient)

First you compile(collect, list) all the dependencies of every app of that language.
You store this list on a database, and then on the frontend compare which ones are
installed and which ones aren't.

