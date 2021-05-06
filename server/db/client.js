const { Pool } = require('pg')
const DATABASE_URL = process.env.DATABASE_URL;

/**
 *  Connection string contains information on the database and how to connect to it
 *  
 *   host - Postgres server hostname 
 *   port - port on which to connect
 *   user - User with which to authenticate to the server
 *   password - Corresponding password 
 *   database - Database name within the server
 * 
 *   To create a connection to a Postgres database you can pass the individual properties
 *   or a connection string that has them all together.  
 * 
 *   We are grabbing the connection string stores in the .env file
 *   note: never keep database info in your code files
 * 
 *   Connection Pooling:
 * 
 *   It ensures ‘closed’ connections are not really closed, but returned to a pool, 
 *   and ‘opening’ a new connection returns the same ‘physical connection’ back, 
 *   reducing the actual forking on the PostgreSQL side.
 * 
 *  The client pool allows you to have a reusable pool of clients you can check out, use, and return. 
 *  You generally want a limited number of these in your application and usually just 1.
 * 
 *   https://node-postgres.com/features/pooling
 * 
*/ 

const client = new Pool({
    connectionString: DATABASE_URL
});

/*
 *    wrapping a function around the built-in connect method
 *    note: connect technically behaves synchronously even though it is asynchronous (e.g. C++ library)
 *    connect() locks the event loop while connection is being made; but you can still wrap in a promise
 *    https://node-postgres.com/api/pool
*/

const connect = () => {
    client.connect()
    .then(() => console.log('connected to database'))
    .catch(e => console.error(e))
}

// wrapping a function around the built-in query method (connects and executes a query)
// https://node-postgres.com/api/pool
const query = (text, params, callback) => {
    return client.query(text, params, callback)
}

module.exports = {
    connect,
    query
}