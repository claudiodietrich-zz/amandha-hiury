const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true,
  }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
