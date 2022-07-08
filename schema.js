
const { Mongoose, default: mongoose } = require("mongoose");
const schema = mongoose.Schema

const tweetSchema = new schema ({
    username:{type:String }
})
