const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === "/" && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        const response = {
            message: 'Hello world',
            id: 15
        };
        res.end(JSON.stringify(response));
    }

    else if (req.url === '/createTask' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk)=>{
            chunk = chunk.toString();
            body += chunk;
        });
        req.on('end', ()=> {
            res.writeHead(200, {'Content-Type': 'application/json'})
            const response = {
                task: JSON.parse(body),
                message: 'Task created',
            }
            res.end(JSON.stringify(response));
        });
        console.log(body);
    }
})



server.listen(3005, ()=>{
    console.log('Server running on port 3005');
})
