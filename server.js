const express = require('express');

const app = express();
app.get('/', (res,req) => {
    res.send('Hello Azure');
});

app.listen(8080, '0.0.0.0');
console.log('Running on 0.0.0.0:8080');