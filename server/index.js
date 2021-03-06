const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.resolve('./')));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./index.html'));
});


app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
