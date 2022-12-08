import mongoose from 'mongoose';

export default () => {
    mongoose.connect("mongodb://127.0.0.1:27017/todoapp", { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

    mongoose.Promise = global.Promise;
}