const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 5555;
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
var user = [];

app.post('/api/user', (req, res) => {
    user.push(req.body)
    console.log(req.body)
    res.send(JSON.stringify(user))

})


app.get('/api/user', (req, res) => {

    res.send(JSON.stringify(user))

})



app.listen(port, () => {

    console.log(`Server is running at: http://localhost:${port}`);

})
