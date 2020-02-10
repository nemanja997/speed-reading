import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        title: {
            type: String,
            required: [true, 'Type field is required']
        },
        body: {
            type: String,
            required: [true, 'Body field is required']
        },
        author: {
            type: String,
            required: [true, 'Author field is required']
        },
        imageUrl: {
            type: String,
            required: false
        }
    });

export default articleSchema;
