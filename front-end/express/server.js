// hosts it on the express web
const express = require('express');
const path = require('path');
const app = express();

// creates a virtual path prefix called 'static
// to serve static files from the 'public' directory
// ex. http://localhost:8080/static/img/kitten.jpg
// ex. http://localhost:8080/static/css/style.css
app.use('/static', express.static(path.join(__dirname, 'public')));

// routes roots path to serve specific file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// starts server on port 8080
app.listen('8080', () => console.log("listening on port 8080"));