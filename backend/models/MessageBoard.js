const mongoose = require('mongoose')

const MessageBoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    messages: {
        type: String,
        required: true
    }
})


const MessageBoardModel = mongoose.model('messageboard', MessageBoardSchema)

module.exports = MessageBoardModel