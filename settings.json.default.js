export default {
	// Wether the repository/app is considered deprecated or not
	deprecated: false,
	// App manager name
	devtools: {
		// Public app name
		name: "Perseverancia Games",
		// App repository name
		repositoryName: "perseverancia-games",
		// App version
		version: "v1.0.0",
		// App description
		description: "Frontend website for perseverancia games.",
		// Main app type(next.js, react, python, nodejs, c++, etc.)
		appType: "Next.js",
		// Commands that we are able to run at the root of the app
		commands: {
			// Command to setup the app(Might not exist), if it exists this
			// will be runned before start
			setup: "npm i",
			// Command to build the app
			build: "next build",
			// Command to start the app, optionally add default args like port in this case
			// You should caputure its pid whenever possible, by using the command:
			// & echo $! > ./pid
			start: "next start -p 38200 & echo $! > ./pid",
			// Command to stop the app
			// It should be used if the AppManager class can't stop the app by itself
			stop: "[Command to stop]",
			// Global start
			// A start command that no matter where it's run, it will start the app
			globalStart: "[CD somewhere and start]",
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
