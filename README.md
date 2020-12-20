# WET BAT PROJECT

## ABOUT THIS PROJECT

This app was created as a solution for part of Wet Bat's FY2020 strategic action to implement an easy to use back-office. This version of the app focused specifically on the "Create and manage quotes" and "Convert quotes into services". A minimal quoting functionality was built in order for Wet Bat employees to easily create and manage their incoming and pending quotes. An employee is able to create a new quote, view all the pending quotes, close a pending quote to a converted quote, and view all converted quotes.

## FINAL PRODUCT

## RUNNING PROJECT ON LOCAL MACHINE

From the repo:

1. Fork and clone this repository
2. Run `npm install` to install dependencies
3. Copy the .env.exmaple file and set it to .env
4. Set the .env file to include database information
5. `cd api` from the project root folder and run `npm run db:reset` to setup the database
6. You will need to run two terminals. Start the express server by `cd api` from the project root folder and run `npm start`. In the other terminal, `cd client` and then `npm start`.
7. The app will be served at http://localhost:3000/.

## DEPENDENCIES

- axios: 0.21.0
- node-sass: 4.0.0
- react: 17.0.1
- react-dom: 17.0.1
- express: 4.16.4
- pg: 8.5.1
- dotenv: 2.0.0
- body-parser: 1.18.3

## FEATURES:
