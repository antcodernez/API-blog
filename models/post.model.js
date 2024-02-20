const {Schema, model} = require("mongoose");

const postSchema = new Schema({
    postId: {
        type: String,
        require: true,
        unique: true
    },
    content: {
        type: String,
        require: true
    }
})

export default model("post", postSchema);