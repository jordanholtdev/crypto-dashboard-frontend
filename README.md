# Crypto Dashboard Project - Front-end

This repository stores the front-end code for the [Crypto Dashboard Project](https://crypto.jordanholt.dev/).

This Crypto Dashboard application tracks popular information for the top 10 cryptocurrencies by market share. Information for each cryptocurrency includes, price, market share, volume, 24 hour change as well background & technical information on the cryptocurrency projects themselves. Graphs that track pricing trends are including for each cryptocurrency.

The application also provides an example porfolio which tracks holdings, current value and puchase activity for a user.

## Screenshots

![screenshot of website 1](https://github.com/jordanholtdev/crypto-dashboard-frontend/blob/main/screenshots/crypto-screenshot-1.png)
![screenshot of website 2](https://github.com/jordanholtdev/crypto-dashboard-frontend/blob/main/screenshots/crypto-screenshot-2.png)
![screenshot of website 2](https://github.com/jordanholtdev/crypto-dashboard-frontend/blob/main/screenshots/crypto-screenshot-3.png)

## Functionality

-   Website shows most popular crypto currencies based on market cap.
-   This website pulls data from a database that pulls information from the Coingecko API.
-   Every coin has a modal that contains detialed information regarding the coin as well as price trend data rendered via Recharts.
-   There is an example portfolio page containing current holdings, value and activity.

## Technology

-   [React](https://reactjs.org/)
-   [Amazon S3 Cloud Storage](https://aws.amazon.com/s3/)
-   [Axios](https://axios-http.com/docs/intro)
-   [Recharts](https://recharts.org)
-   [Knex.js](https://knexjs.org/)
-   [Charka UI](https://chakra-ui.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3016](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

With the necessary permissions configured, this will deploy the bundled app to the target S3 bucket.
