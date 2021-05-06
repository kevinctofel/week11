const { createTodo } = require('./todos');

async function createInitialTodos() {
    try {
        await createTodo({
             todo: 'goto gym', 
             isCompleted: false,
        });  
        await createTodo({
            todo: 'do laundry', 
            isCompleted: false,
        });  
        await createTodo({
            todo: 'food shopping', 
            isCompleted: false,
        });  
        await createTodo({
            todo: 'do schoolwork', 
            isCompleted: false,
        });  
    } catch(error) {
        console.error("Error creating initial. Error: ", error);
        throw error;
    }
}

const seed = async () => {
    try {
        await createInitialTodos();
        console.log(`-Todos created`);
    } catch(error) {
        console.error("Error seeding. Error: ", error);
        throw error;
    }
}

module.exports = { seed };