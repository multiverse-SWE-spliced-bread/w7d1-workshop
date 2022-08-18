const express = require('express')
const boardsRt = express.Router()
const {check, validationResult} = require('express-validator')
const {Board} = require('../models/')


boardsRt.get('/', (req, res) => {
    res.send('It works.')
})

boardsRt.post('/', [check('type').trim().not().isEmpty()],async (req, res) => {
    const errors = validationResult(req)  
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
      
    }
    //add incoming board to our database
    //send something back
    
    await Board.create(req.body)   
    res.sendStatus(200)
})

boardsRt.put('/', async (req, res) => {
    console.log(req.body)
    // let foundBoard = await Board.findByPk(req.body.id)
    // await foundBoard.update({rating: req.body.rating})


    await Board.update({
        rating: req.body.rating,
      }, {
        where: { id:req.body.id },
      })

    
    res.sendStatus(200)
})


module.exports = {boardsRt}