var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    todoId: String,
    title: String,
    createdDate: String,
    isDone: Boolean, 
});

module.exports = mongoose.model("todo", todoSchema);