# App managers spec

These are some general spec rules for every app manager out there.

1. [Unified arguments](./ArgumentsSpec.md)
2. [Pid's management](./Pids.md)
	This one is optional because it's mainly used to stop the app after,
	and it's really hard to stop subprocesses started by that app, therefore
	is better to use the next one to stop apps, the 'Rock hard stop command'.
3. [Rock hard stop command](./RockHardStopCommand.md)
