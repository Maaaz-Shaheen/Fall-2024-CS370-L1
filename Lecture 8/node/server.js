console.log("my js file runs!")

// const {createServer} = require('http')

import {createServer} from 'http';


const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
];

const server = createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html',
    // });
    // res.write('<h1>Hello world</h1>')
    // res.end();
    
    if (req.url === '/api/users' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        res.write(JSON.stringify(users));
        res.end();
    }
});

const PORT = 9000; 

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

