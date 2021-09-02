const express = require('express');
const app = express();

app.get('/sum',function(req, res) {
    const ans = parseInt(req.query.a) + parseInt(req.query.b); 
    res.send(`soma ${ans}`);
    console.log(req.query);
});

app.listen(5000);
  

