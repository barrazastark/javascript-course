const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;


app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const todos = [
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Finish homework' },
    { id: 3, title: 'Exercise' },
];

app.post('/todo', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    // insertar en al bd
    res.json(todo);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});