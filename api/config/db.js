import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://linhshark02:linhvjppro02z@cluster0.fnpej0k.mongodb.net/');
        console.log('Successfully connected to database');
    } catch (error) {
        console.log('Error connecting to database');
        handleError(error);
    }
}
export default connect;