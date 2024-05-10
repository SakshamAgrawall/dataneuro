import mongoose from "mongoose";

const dataModel = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    aboutMe: {
        type: String,
    },

}, { timestamps: true })

export default mongoose.model('data', dataModel)