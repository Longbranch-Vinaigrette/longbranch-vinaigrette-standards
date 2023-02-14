export default {
	// Wether the repository/app is considered deprecated or not
	deprecated: false,
	// Longbranch Vinaigrette is the updated version of devtools
	// the main difference is that this one is more decoupled than
	// how devtools was before
	longbranchVinaigrette: {
		// Order
		// Order is the subomdule hierarchical authority,
		// a submodule of lower order can't contain a submodule of
		// higher order.
		// 1 is the lowest level of order, any app/submodule can own it.
		// n is the highest level of ownership, no other app/submodule
		// can own it.
		order: 1,
		// Override default data path
		overrideDefaultDataPath: "/path/to/folder"
	},
	// App manager name
	// It was called devtools before
	devtools: {
		// App importance
		importance: "core", // Possible values: core, optional
		// State whether the repository is considered a submodule or not
		submodule: false,
		// This very document version
		specificationVersion: "1.0.0",
		// Information about the app functionality
		information: {
			// App type (server, webserver, standalone, documentation)
			// Documentation is supposed to be just documentation and nothing else,
			// like this very repository.
			appType: "webserver",
			// App framework (next.js, react.js, nodejs, etc.)
			appFramework: "next.js",
			// Framework information
			frameworkInformation: {
				// Version
				version: "1.0.0"
			},
			// App language(javascript, python, c++/cpp, c, etc.)
			language: "markdown",
			// Language information
			languageInformation: {
				// Language version
				version: "1.0.0"
			}
		},
		// Declare project dependencies
		dependencies: [
			{
				// Dependency name
				"name": "psutil",
				// Its version
				"version": "5.9.4"
			}
		],
		// Public app name
		name: "Perseverancia Games",
		// App repository name
		repositoryName: "perseverancia-games",
		// App version
		version: "v1.0.0",
		// App description
		description: "Frontend website for perseverancia games.",
		// Commands that we are able to run at the root of the app
		commands: {
			// Command to setup the app(Might not exist), if it exists this
			// will be runned before start
			setup: "npm i",
			// Command to build the app
			build: "next build",
			// Command to start the app, optionally add default args like port in this case
			start: "next start -p 38200",
			// Command to stop the app
			// It should be used if the AppManager class can't stop the app by itself
			stop: "[Command to stop]",
		},
		// More info on commands, mainly used to build and choose where the build will
		// be moved to.
		commandsInfo: {
			// Small description
			description:
				"With these options you can build and choose where the files will be moved to",
			// Order of commands to successfully run the app
			commandOrder: ["setup", "build", "start"],
			// Info on specific commands
			commands: [
				{
					// Formal name
					formalName: "Build command",
					// Name of the command
					name: "build",
					// Description
					description: "Command to build the app.",
					// Where the build(or whatever the command does) is gonna be located.
					location: "./out",
					// Whether the build output is can be moved from the directory to another one
					canBeMoved: false,
				},
			],
		},
		// Arguments that the app can receive
		arguments: [
			{
				// The formal name of the argument
				formalName: "Port",
				// Prefix to start the argument with
				prefix: "-p",
				// Argument type:
				// Abbreviated:
				// int, str, boo
				// Complete:
				// integer, string, boolean
				argType: "int",
				// Argument description(necessary to show to the end user(which is me xd))
				description: "Sets the port of the app.",
			},
		],
		// Environment configuration
		env: {
			// Name of the environment file, I had to add this because the normal name should be
			// '.env', but next.js uses '.env.local'
			fileName: ".env.local",
			// Short global description
			description: "Some description",
			// Long description list
			descriptionList: [
				"Use the following to replace stuff on the command by its representation:\n",
				"$NAME: Is replaced for the repository name.\n",
				"$USER: Is replaced for the repository owner username.\n",
				"$PATH: Is replaced for the repository path.\n",
				"Example: curl http://some.domain.com/$USER/$NAME",
			],
			// Whether the app uses my personal api dotenv5 or not
			dotenv5: false,
			// Environment variables
			variables: [
				{
					// The formal name
					formalName: "Authentication url",
					// The variable name in the file
					varName: "NEXT_PUBLIC_AUTHENTICATION_SERVER_URL",
					// Description for the end users(me xD)
					description:
						"Server ip or fqdn for authentication related things, like logging in,\n register, etc",
					// Description list(Optional)
					// A description list is just like description, but
					// with a twist, every item in the list is
					// a line.
					descriptionList: [
						// This is just an example, text copied from
						// repository-mirror.
						"A command that is run after a git pull.\n",
						"Use the following to replace stuff on the command by its representation:\n",
						"$NAME: Is replaced for the repository name.\n",
						"$USER: Is replaced for the repository owner username.\n",
						"$PATH: Is replaced for the repository path.\n",
						"Example: curl http://some.domain.com/$USER/$NAME",
					],
				},
			],
		},
	},
};
