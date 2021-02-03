const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    console.log('responding');
    response.sendFile(__dirname + '/views/homepage.html')
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', function (req, res) {
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/homepage.html')
})

app.listen(3000, () => {
    console.log('Server listening');
})