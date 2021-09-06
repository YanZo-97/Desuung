//console.log('Hello');
// const myArray = [1,2,3,4,5,6];

// myArray.forEach((number) => console.log(number));

const http = require('http');

const ip = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello from server');
});

server.listen(port, ip, () => console.log('Server running...'));

