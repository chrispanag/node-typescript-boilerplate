# Boilerplate Nodejs App

A simple boilerplate code for bootstrapping a NodeJS Express backend in Typescript.

## Batteries included

* cors
* body-parser
* compress
* .env environment variables
* simple console logging for requests
* prettier, eslint and nodemon for rapid development

## Suggested VSCode Plugins

1. ESLint
2. Prettier
3. DotENV

## How to start

1. Create a copy of `example.env` named `.env`
2. `yarn install`
3. `yarn run dev`
4. `Start adding stuff`

## Commands

* `yarn start` - Starts the app. Needs to be builded first
* `yarn run build` - Builds the app (typescript compilation)
* `yarn run dev` - Starts nodemon (Auto-restart on changes with auto-rebuild)

## FAQ

### Where do I add environment variables?

All of the env variables are handled within the `env.ts` file. This file exports the env variable that includes all the environment variables imported. When you add a new environment variable, make sure to add it to the `.env` file and to the `example.env` file for sharing it with others. **Remember to only put sensitive data on the `.env` file and not on the `example.env` one**.

### How do I add a new controller?

Just copy the hello-world.ts file and start working. Remember afterwards to add an `app.use` statement on the `app.ts` file.

### How do I add a database?

If you want to add mongodb, install the necessary packages (mongodb, mongoose with their respective types) and proceed. For SQL, I suggest typeorm, with the respective driver (mysql, postgres etc).

You will also need to create a new database. The easiest way to achieve that is to create a docker instance. But you can always connect to an already existing mongodb (see [mongodb atlas](https://www.mongodb.com/cloud/atlas)).

## Todo

* Add a testing framework

## License

[MIT](LICENSE)
