const http = require('http');

const fs = require('fs');

const html = fs.readFileSync('../html/register.html')
// step 1 : Create a server

const server = http.createServer((req, res) => {
    res.end(html)
    // res.end('<h1> Hello Amrendra</h1>')
    console.log('A new request recieved');
    // console.log(req);
    // console.log(res);
    
})

// step2 Start the server
server.listen(8000,'127.0.0.1', () => {
    console.log('Server has started');
    
})