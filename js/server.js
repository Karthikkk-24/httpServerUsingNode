const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.end(fs.readFileSync('index.html'));
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end(fs.readFileSync('about.html'));
    } else if (req.url == '/home') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        // res.end('<h1>Home Page</h1>');
        res.end(data.toString());
    } else {
        res.statusCode = 404;
        res.end(fs.readFileSync('404.html'));
    }

});

// server.listen('Server is listening on port ' + port);
server.listen(port, () => {
    console.log('Server is listening on port ' + port);
});