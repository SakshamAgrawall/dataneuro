import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // console.log(process.env.MONGO_URI)
        const connect = await mongoose.connect(process.env.MONGO_URI,);
        console.log('connected to DB Successfully')
    } catch (error) {
        console.log(`error in mongodb ${error}`)

    }
}

export default connectDB;