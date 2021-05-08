const { query } = require('./client');

const getAllTodos = async () => {
    try {
        const { rows } = await query(`
             SELECT * FROM todos
             ORDER BY id
        `);

        return rows;

    } catch (error) {
        throw error;
    }
}

const createTodo = async ({
    todo,
    iscompleted = false
}) => {
    try {
        await query(`
            INSERT INTO todos(todo, iscompleted)
            VALUES ($1,$2)
            `, [todo, iscompleted]
        );

    } catch (error) {
        throw error;
    }
}

const completeTodo = async ({
    id
}) => {
    try {

        await query(`
             UPDATE todos SET iscompleted = NOT iscompleted WHERE id = $1
             `, [id]
        );

    } catch (error) {
        throw error;
    }
}

const editTodo = async ({
    id,
    text
}) => {
    try {
        await query(`
             UPDATE todos SET todo = $2 WHERE id = $1
             `, [id, text]
        );

    } catch (error) {
        throw error;
    }
}

const deleteTodo = async ({
    id }) => {
    try {
        await query(`
            DELETE FROM todos WHERE id = $1
            `, [id])
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createTodo,
    getAllTodos,
    completeTodo,
    editTodo,
    deleteTodo
}