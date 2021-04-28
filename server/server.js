const apiRouter = require("./routes");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

// express middleware:
app.use(cors()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());  

/**
 * define route handler
 */
app.use('/api/todos', apiRouter);

/**
 * express error handler
 */

app.use((err, req, res, next) => {
   const defaultErr = {
     log: 'Express error handdler caught unknown middleware error',
     status: 400,
     message: { err: 'An error occurred' },
   };
 
   const errorObj = Object.assign(defaultErr, err);
   console.log('ERROR: ', errorObj.log);
   return res.status(errorObj.status).json(errorObj.message);
 });
 
app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`)
});