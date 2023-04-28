# InnoButler API

## Set up dev environment

1. Install [Docker](https://docs.docker.com/get-docker/)
2. Spin up the docker container with the postgres database

```bash
$ docker-compose up
```

3. Install [nvm](https://github.com/nvm-sh/nvm)
4. Copy the contents from `Dev Backend .env` from 1Password (engineering vault) into a new file in the root folder that you call `.env`
   NOTE: You must restart the application if it's running to apply the changes
5. Check the node version in [package.json](https://github.com/ceezer-tech/api/blob/main/package.json) and install that version via nvm

```bash
$ nvm install 16.15.1
$ nvm use 16.15.1
```

6. Install all necessary packages

```bash
$ npm install
```

7. Run migrations to create the database schema

```bash
$ npm run migration:run
```

8. Populate the database with seed data

```bash
$ npm run seed
```

9. To inspect the database get any DB viewer you want (e.g. [TablePlus](https://tableplus.com/)) and to get the internal IP for the database running on Docker you can get the DB connection string from `TYPEORM_URL`

### Prettier

To adhere to code formatting, we are using the Prettier extension.
Please install the [Prettier extension for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

And in your VSCode Settings, add following lines:

```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
```
