const express = require('express');
const logger = require('./logger')

const app = express();

app.use(logger)

app.get('/', (req, res) => {

    res.send('Home')

});

app.get('/About', (req, res) => {

    res.send('About')

});
app.get('/service', (req, res) => {

    res.send('service')

});

app.get('/maxi', (req, res) => {

  res.send('maxi')    

});



app.listen(8080, ()=>{

    console.log('server is listening on port 8080')
});
