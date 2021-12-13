const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description:  {
        type: String,
        required:true
    },
    deadline:  {
        type: Date,
        required:true
    },
    isCompleted:  {
        type: Boolean,
        default: false,
        required:true
    },
});

const Todo = mongoose.model('todo', todoSchema);
module.exports = Todo ;