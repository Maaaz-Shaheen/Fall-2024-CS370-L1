const express = require('express');

const app = express();

const PORT = 3005;

app.use(express.json());


app.get('/', (req, res)=> {
    res.send('Hello world');
});

app.post('/createTask', (req, res)=> {
    const task = req.body;
    res.json({
        task,
        message: 'Task created',
    });
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
