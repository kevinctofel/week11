require('dotenv').config();

const express = require("express");
const cors = require("cors");
const chalk = require("chalk");
const compression = require('compression')
const todosRouter = require("./routes/todos.router");
const { connect } = require("./db/client");
const { sync } = require("./db/sync"); 
const { seed } = require("./db/seed"); 
const { PORT = 8080 } = process.env;

const app = express();

const createApp = () => {
  // middleware:
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); 
  app.use(compression());

  // auth and api routes
  app.use("/api", todosRouter);
}

const syncDb = async() => {
  // Environment variables are always strings
  if (process.env.DBSYNC === "TRUE"){
    console.log(`>>> Seeding database`);
    await sync()
    await seed()
    console.log('>>> Seeding completed');
  } else {
    connect();
  }
}

const startListening = () => {
  app.listen(PORT, () =>
     console.log(chalk.bgRedBright(`>>>Server is listening on port ${PORT}`))
  )
};

/*
 * Normally you have to "sync" you database the first time your server is run. 
 * This will build your database and insert any initial data.
 * But this will only happen once, so in prod applications, there will be separate
 * scripts (.sql) that you will run outside of starting your server that will do this.
 * This process is normally handled by a DBA, but sometimes it can be done by a developer 
 * if the database is small enough.
 *
*/
async function bootApp() {
    await syncDb() // initializing and seeding your database
    await createApp()
    await startListening()
 }

bootApp();