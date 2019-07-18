const express = require('express');
const app = new express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('pages'));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.listen(port, ()=>{
    console.log(`Online on port [${port}]`);
});