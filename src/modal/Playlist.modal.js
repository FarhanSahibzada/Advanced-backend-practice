import mongoose from "mongoose";


const playlistSchema =  mongoose.Schema({
    name : {
        type : string ,
        required : true ,
    },
    description: {
        type: String,
        required: true
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})