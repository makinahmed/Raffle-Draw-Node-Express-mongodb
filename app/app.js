require("dotenv").config("../.env");
const express = require("express");
const { notFoundHandler, errorHandler } = require("./error");
const app = express();
const myDB = require("../db/db.js");
// /media/makin/CSE/Full Stack Army/Express/db/db.js
myDB.createTicket('user 1',1000)
myDB.createTicket('user 2',1000)
myDB.createTicket('user 3',1000)
myDB.createTicket('user 4',1000)
myDB.createTicket('user 5',1000)
myDB.createTicket("user 6", 1000);
const tickets = myDB.find()
console.log('All Tickets: ',tickets);
const winners = myDB.raffleDraw(3);
console.log('winners', winners);

  

app.use(require("./middleware"));
app.use(require("./routes"));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;

// Status code error are made by developers and others error are made by server error ( server errors: db connection lost etc.);

