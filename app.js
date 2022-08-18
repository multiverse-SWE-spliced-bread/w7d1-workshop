const {buildDB} = require('./db/populateDataBase')
const express = require('express')
const {boardsRt, cheesesRt} = require('./routes')
const app = express()
buildDB()

// app.use((req, res, next) => {
//     console.log('Incoming Request') 
//     next()
// })

app.use(express.json())
app.use('/boards', boardsRt)
app.use('/cheeses', cheesesRt)



 


app.listen(3000, ()=>{
    console.log('The server is live and listening at http://localhost:3000')
})




