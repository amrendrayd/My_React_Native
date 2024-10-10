const http = require('http');

const server = http.createServer((req, res) => {
    let path = req.url;

    if(path === '/' || path === '/home'){
        res.end('I am in home Page');
    }
    else if(path === '/contact'){
        res.end('I am in contact page');
    }
    else if(path === '/about'){
        res.end('I am in about page');
    }
    else {
        res.end('Page not found');
    }
});

server.listen(8080, '127.0.0.1' , () => {
    console.log('Server has started');
    
})