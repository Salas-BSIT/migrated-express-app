//server.js
const express = require('express');
const cors = require('cors');
const path = require('path');


//In-memory "databases" (an arrary of tasks)
let tasks = ['Learn Node.js', 'Build a server', 'Feel the pain of manual parsing'];

const PORT = 3000; 

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies (replaces manual chunk collection!)
app.use(cors()); // Enable CORS
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (replaces manual fs.readFile!)

// ... routes will go here ...

app.listen(PORT, () => {
  console.log(`🚀 Express server running at http://localhost:${PORT}`);
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks); // Automatically sets Content-Type to application/json
});

app.post('/api/tasks', (req, res) => {
    const newTask = req.body.task; // Automatically parsed by express.json() middleware!

    if (!newTask) {
        return res.status(400).json({ error: 'Task is required' });
    }

    tasks.push(newTask);
    console.log(`✅ New task added: ${newTask}`);

    res.status(201).json({ message: 'Task created', task: newTask });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
     