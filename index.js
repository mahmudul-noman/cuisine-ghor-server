const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.port || 5000;

const chef = require('./data/chef.json');
const service = require('./data/service.json');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Cuisine Ghor is Running')
});


app.get('/service', (req, res) => {
    res.send(service);
});

app.get('/chef', (req, res) => {
    // console.log(chef);
    res.send(chef);
});



app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chef.find(n => parseInt(n.id) === id);
    // console.log(selectedChef);
    res.send(selectedChef);
});


app.listen(port, () => {
    console.log(`Cuisine Ghor Port is Running ${port}`);
})