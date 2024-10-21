const express = require('express');

const mongoose = require('mongoose');

const app = express();
const port = 3005;

const mongoURI = 'add_connection_string_here';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


// Define a Mongoose schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

app.use(express.json());


const User = mongoose.model('User', UserSchema);

app.get('/users', async (req, res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
})

app.post('/users', async (req, res)=>{
    const { name, age } = req.body;
    const user = new User({ name, age });
    try {
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
