## Pid's management

Every app manager MUST store the pid's of the running app processes on the folder \
'./.local/pids' whenever possible.

Each pid should be stored in a new folder which MUST be deleted when the app \
exits, the folder name MUST be the pid and it SHOULD contain a file called \
pid with its content being the pid again.

This is so in future updates of the spec the apps may store stuff on the pids \
folders like a session storage.

When the app manager starts it SHOULD first check every pid on './.local/pids' \
if one of the apps is not running then its pid folder SHOULD be deleted.
Example:

/pids
	| 32425  <--- App not running, delete folder.
	|	| /pid
	
