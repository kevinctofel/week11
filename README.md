## Todo App - Postgres (Full Stack App)

### Lab

- Fork and clone this repo
- Install dependencies for both apps (client and server): npm install
- Create your own database called todos on ElephantSQL
- In the root directory of the server, create an .env file and put this in it (no spaces anywhere):

```
  DATABASE_URL=put your database URL here
  PORT=8080
  DBSYNC=TRUE 
```

- Take the URL from the ElephantSQL database dashboard and put that value in the .env DATABASE_URL variable
- Test out the Todos app (run the client and the server)


This will give you a working Todos App that stores all of the todos in our Postgres database and not in our node memory (in our sever) or React state (like earlier iterations).

I will go through everything in this working app together with you.

This Todo app does everything, BUT deletes a todo.

### Homework (due May 10th)

All you have to do is add delete functionality to the app. Just follow the patterns that have been done for you for the reading, and editing functionality that we have reviewed together in lab.

Continue to practice with what we have learned so far and build more functionality (or re-factor) the code
to learn more.

Have a fun, safe and healthy summer!
 

 