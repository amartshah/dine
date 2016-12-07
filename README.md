# DiNe

Find business professionals in your area to eat and network with while you are traveling alone

## Installation

[Create an AppGyver account and install the steroids command line interface](http://www.appgyver.io/steroids/getting_started)

Enter the following commands in your terminal: 

`git clone https://github.com/eecs394-f16/dine.git`

`cd dine`

`npm install`

`steroids update`

`steroids connect`

A page should popup in your browser. It contains links to the AppGyver Scanner for different phones. Using the AppGyver app, you can scan the QR code on the browser page and run DiNe on your phone

## Deploy

Run `steroids connect` in your terminal. A page should popup in your browser. Select the "Cloud" button at the top of the page. Under "App Details", select "Deploy to cloud". To share your app, select "Open cloud share page". A new page will open with a QR code for AppGyver to run DiNe. You can send the url of this page to other people and they will be able to run the app by opening the url and scanning the QR code with AppGyver 

## Backend

[All code for the backend is located at the dine_backend repository](https://github.com/eecs394-f16/dine_backend). The backend is hosted by [heroku](https://www.heroku.com/home) and uses [node](https://nodejs.org/en/) and [express 4](http://expressjs.com/). The database is [Postgresql 9.5](https://www.postgresql.org/) 

The database is configured with the following lines in the `server.js` file of the dine_backend repository.

```javascript
//database configuration

  var connection = {
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    ssl: true
  };
```

If you change the url of the backend, you will also have to update the frontend. Locate the following line in the `www/app/services/config.services.js` file in your [dine](https://github.com/eecs394-f16/dine) repository and update the variable "backendUrl" with the new base url of the backend

```javascript
var backendUrl = "https://eecs-394-dine-backend.herokuapp.com";
```


## Contributors

Amar Shah, Cory Colbert, and Devon D'Apuzzo








