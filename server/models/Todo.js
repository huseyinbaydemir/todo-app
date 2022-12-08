import mongoose, { Schema }  from 'mongoose';

const todoSchema = new Schema({
    todoId: String,
    title: String,
    createdDate: String,
    isDone: Boolean
});

export default mongoose.model('todo', todoSchema);
