import express from "express";

const app = express();

app.get('/', async (req,res) => {
    res.send('HI there');
})

app.listen(8080);