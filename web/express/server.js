const express = require('express');
const app = express();

const fetch = require("node-fetch");
// https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html

port = process.env.PORT || 5000;

var kanyeQuote;

const callExternalApi = async () => {
    let response = await fetch('https://api.kanye.rest');
    let data = await response.json()
    return data.quote;
}

app.route('/helloWorld')
    .all((req, res, next) => {
        callExternalApi().then((data) => {
            // kanyeQuote = data 
            console.log(data);
        })
        next()
    })
    .get((req, res) => {
        var data = `Hello World! Kanye Quote: ${kanyeQuote}!!`
        if (req.header('Content-Type') == 'text/html') {
            data = `<h1>${data}</h1>`
            res.send(data)
            res.sendStatus(200)
        }
        else if (req.header('Content-Type') == 'application/json') {
            data = { data: data };
            res.send(data)
            res.sendStatus(200)
            // can also do res.json({ text: "Hello World!" })
        }

        
    })
    .post((req, res) => {
        // if (req.body) {
            res.send(`We have recieved your request!\n ${req.body}`);
            res.sendStatus(200);
        // } else {
            // res.sendStatus(400).send("Bad Request. Please enter data in body.");
        // }
        
    })
    .put((req, res) => {
        var replacementText = req.body.replacementText || req.query.replacementText;
        var defaultText = { text: "Hello World!" };        
        if (replacementText) {
            defaultText.text = replacementText;
            res.send(defaultText);
            res.sendStatus(200);
        } else {
            res.status(400).send('Bad Request. Please enter replacementText in body or query param.')
        }
    })

    
/* Handles both HTTP and HTTPS 
*  Documentation: https://expressjs.com/en/api.html#app.listen
*/
app.listen(port, () => console.log(`listening on port ${port}`));