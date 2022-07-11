# Banking-System
#
## Description
A simple dynamic website with dummy data in the database from 1 to 10 users is saved in the `Customers` table. Users can also transfer money and all transfers will record in the `Transfers` table.

## Installations

##### Open Banking-System Directory in the Terminal and run the following commands:
#
`yarn` or `npm install`
#
##### To run server:
`npm run start`
#### or
`yarn start`

### Functionality
- User can transfer money and save the transfers in the `Transfers` table.
#### PostgreSQL Database: **`banking_system`**
1) **Customers**
2) **Trasnfers**

Customers table have basic fields:
- **id**
- **username**
- **email**
- **current_balance**

Transfers table have basic fields records happend:
- **id**
- **sender**
- **receiver**
- **balance**
### Code Styles
This project uses `eslint` and `prettier`. all configurations for this project inside `package.json` file.

## Available Scripts

In the project directory, you can run:

##### `npm run dev` or `yarn dev`
Runs the app in the development mode.
The page will reload automatically if you make edits.

##### `npm run format` or `yarn format`
Will format by prettier and will also see if any lint errors in the console.

##### `npm run test` or `yarn test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

##### `npm run build` or `yarn build`
Builds the app for production to the dist folder.
It's format TypeScript to JavaScript

##### `npm run start` or `yarn start`
Build and runs the app in the clients mode.

#### `npm run migrate:up` or `yarn migrate:up`
Make migrations up on the database

#### `npm run migrate:down` or `yarn migrate:down`
Make migrations down on the database
### Built With
- **Node.js**
- **Express.js**
- **TypeScript**
- **Jasmine**
- **PostgreSQL**