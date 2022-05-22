const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const MessageBoardModel = require('./models/MessageBoard')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://norf:norf@cluster0.6ch0i.mongodb.net/messageboard?retryWrites=true&w=majority')

// display all database
app.get('/', async(req,res)=>{
    MessageBoardModel.find({},(err,result)=>{
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

// create/input new data
app.post ('/create', async (req,res)=>{
    const message = req.body
    const newMessage = new MessageBoardModel(message)
    await newMessage.save();
    res.json(message) 
})

app.listen(process.env.PORT || 3001, ()=>{console.log(`connect to port 3001`)})