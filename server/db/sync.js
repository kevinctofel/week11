const { query } = require("./client");

const sync = async () => {

    try {
        await query(`
              DROP TABLE IF EXISTS todos;
        `);
        console.log(`-Tables dropped`);
         
        await query(
            `CREATE TABLE todos (
                 id  SERIAL PRIMARY KEY,
                 todo TEXT NOT NULL,
                 iscompleted BOOLEAN DEFAULT false
             ); `
        );
        console.log(`-Tables successfully created`)
    }
    catch (error) {
        throw error;
    }
};

module.exports = { sync };