# WET BAT PROJECT

## ABOUT THIS PROJECT

This app was created as a solution for part of Wet Bat's FY2020 strategic action to implement an easy to use back-office. This version of the app focused specifically on the "Create and manage quotes" and "Convert quotes into services". A minimal quoting functionality was built in order for Wet Bat employees to easily create and manage their incoming and pending quotes. An employee is able to create a new quote, view all the pending quotes, close a pending quote to a converted quote, and view all converted quotes.

## FINAL PRODUCT

[Video of user going through Wet Bat Dashboard](https://drive.google.com/file/d/1Jr_54ZAOoHcjue7ot14qaYyjkuFIIP3J/view?usp=sharing)

Main page screenshot
![Main page screenshot](https://github.com/kourtneyhuget/wet-bat-project/blob/main/docs/MainPageScreenshot.png?raw=true)

Main page bottom screenshot
![Main page bottom screenshot](https://github.com/kourtneyhuget/wet-bat-project/blob/main/docs/MainPageBottomScreenshot.png?raw=true)

Detailed quotes screenshot
![Detailed quotes screenshot](https://github.com/kourtneyhuget/wet-bat-project/blob/main/docs/DetailedQuotesScreenshot.png?raw=true)

## RUNNING PROJECT ON LOCAL MACHINE

From the repo:

1. Fork and clone this repository
2. Run `npm install` to install dependencies
3. Copy the .env.exmaple file and set it to .env
4. Set the .env file to include database information
5. `cd api` from the project root folder and run `npm run db:reset` to setup the database
6. You will need to run two terminals. Start the express server by `cd api` from the project root folder and run `npm start`. In the other terminal, `cd client` and then `npm start`.
7. The app will be served at http://localhost:3000/.

## STACK USED

### Front End

- React
- SCSS

### Back End

- PostgreSQL
- Node.js
- Express

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

## Core Features

- The employee fills in the Quick Quote form for the client based on the clients information and inputs a price reflective of the package.
- The quote then moves to the Pending Quotes table. The main dashboard features a less detailed table of Pending Quotes with the ability to "close" the pending quote. In the side navigation under Quotes, they are able to acess a more detailed table. The employee is able to "close" the pending quote from both tables.
- Clicking on the close button moves the quote from Pending Quotes to the Quotes Converted to Services Table.
- The employee is able to view all closed quotes in the Quotes Converted to Services Table.

## Things to improve

- Create custom hooks to reuse stateful logic
- Find a better way to override Material UI
- Implement a table footer in the quotes converted to services table that has a sum of all closed quotes

## Structural decisions that were made

- Price is currently an input field in the quick quote form. I originally put it into a modal so when the form was submitted, the modal would pop up with an input field to enter the price. This quickly got messy with state and passing state to the modal. My solution to this issue for the future:

  - The user would submit the client and traveling information from the form and it would insert a new client into the database. The next step would be a prompt with a few more questions to create a price reflective of the package the client is inquiring about. Once a price is decided, it would update the database with the price.

- I created two tables for the database. I created a Client table and a Quotes table. My logic behind this decision is that one client can have many quotes (since Wet Bat has approx 10,000 clients) and therefore, one table with the client and quote information would become repetitve with repeating clients inquiring about different packages. The foreign key in the Quotes table is client_id.

- Since I created two tables (Client and Quotes) and one form, I had to find a solution to post the correct data to each table. In the front end I did a post to the back end with all the data from the Quick Quote form. In the back end I used promises to do a database query to get get the client information (ID, first name, last name, phone number, email). If this resolves, it then grabs the traveling information (departure location, departure destination, departure date, return date, travelers, transportation, price) with the corresponding client_id.
