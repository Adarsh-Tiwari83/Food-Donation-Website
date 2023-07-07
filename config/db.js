const mongoose=require('mongoose');

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb ${mongoose.connection.host}`);
    }catch(error){
        console.log(`Mongodb Database Error ${error}`.bgMagenta.white);
    }
};

module.exports = connectDB;