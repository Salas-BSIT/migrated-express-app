1.[at least 80 lines of codes eliminated]
2.[express automatically handles requests from files and set at a right response headers compare to manual coding]
3.[ Express automatically serves files from directory and handles requests better than manual coding]
4.[
app.post('/api/tasks', (req, res) => {
    const newTask = req.body.task; // Automatically parsed by express.json() middleware!

    if (!newTask) {
        return res.status(400).json({ error: 'Task is required' });
    }

    tasks.push(newTask);
    console.log(`✅ New task added: ${newTask}`);

    res.status(201).json({ message: 'Task created', task: newTask });
});
]
5. learn how to make the framework and which part is more appropriate inorder to function
