const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    console.log(__dirname);
    //response.send('<h1>Home Page</h1>')
    response.sendFile(__dirname + '/views/homepage.html')
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html')
})

app.listen(3000, () => {
    console.log('Server listening');
})