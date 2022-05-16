const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const MessageBoardModel = require('./models/MessageBoard')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://norf:norf@cluster0.6ch0i.mongodb.net/messageboard?retryWrites=true&w=majority')

app.get('/', async(req,res)=>{
    MessageBoardModel.find({},(err,result)=>{
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.listen(3001, ()=>{console.log(`connect to port 3001`)})