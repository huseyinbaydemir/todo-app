var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: String,
    date: String,
    completed: Boolean,
});

module.exports = mongoose.model("todo", todoSchema);