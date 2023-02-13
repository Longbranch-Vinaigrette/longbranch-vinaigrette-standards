# Longbranch Vinaigrette

This is a collection of specs/implementation methods for this stack.

Most of the documents here are from the older version, now these apps
work completely different.

## App structure

* Longbranch-Vinaigrette
	* repository-mirror - 
		Clones and pulls repositories from the given user.
	* python-app-manager - 
		It's in charge of managing the app doing operations like: building, starting,
		stopping, etc. \
		It also has a built-in local repository discovery system.
	* longbranch-vinaigrette-web-gui(Mainly for personal use) -
		Interface for repository management.
	* longbranch-vinaigrette-api-server(Mainly for personal use) -
		Backend server for 'longbranch-vinaigrette-web-gui'
