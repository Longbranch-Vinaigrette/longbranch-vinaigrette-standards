# Discovery

Refer to discovery as finding and identifying app repositories within a user
system.

## Purpose

The purpose for discovery are numerous, but here's a small list of what
tasks you could simplify/automatize when discovering repositories:
1. Automatically pull updates
	You could check for a repository update and pull automatically if you
	detect a new version of it.
2. Update dependencies if needed
	You could also automatically detect dependencies and install them if needed.
3. Build and run
	Build and run the app automatically if the user wants to.

## How to detect repositories

Just check if the ".git" folder exists.

## Where to search

First search around the home folder, and then search on the documents folder.
To avoid using too much cpu cache the repositories found and search every time
a bit more, just like crawlers.
