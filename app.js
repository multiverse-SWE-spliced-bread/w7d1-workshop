const {buildDB} = require('./db/populateDataBase')
const express = require("express");
const app = express();
const path = require('path');
const { cheeseData } = require('./db/seedData');
const {cheese, Cheese} = require('./models')
const port = 3000;
buildDB()


app.listen(port, () => {
    console.log(`server running on ${port}`)
})

app.get('/cheeses/:cheese', async (req, res) => {
    let newString = req.params.cheese[0].toUpperCase() + req.params.cheese.slice(1).toLowerCase
     req.params
    //console.log(req)
    const queriedCheese = await Cheese.findOne({where: {title: req.params.cheese}})
    let {title, description } = queriedCheese
    let payload = {
        title: title,
        description: description
    }
    res.send(payload)
    
});

app.get('/starts-with-c', async (req, res) => {
    const dbQuery = await Cheese.findAll()
    let startsWithC = dbQuery.filter((cheese) => {
        if (cheese.title[0] === 'C' ) {
            return true
        }

    })
    res.send(startsWithC)
});

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/cheese/cheddar', (req, res) => {
    res.send(cheeseData.title.Cheddar)
});

/*app.get('/feta', async (req, res) => {
    //console.log(req)
    const queriedCheese = await Cheese.findOne({where: {title: 'Feta'}})
    let {title, description } = queriedCheese
    let payload = {
        title: title,
        description: description
    }
    res.send(payload)
    
});*/

