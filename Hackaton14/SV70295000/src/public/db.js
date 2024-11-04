import {connect} from 'mongoose';
const { MONGODB_URI } =  require('./config.js');


export const connectDB = async() => {
    try {
        await connect(MONGODB_URI);
        console.log("connect to db");
    } catch (error) {
        console.error(error);
    }
};
