import mongoose from "mongoose";

const blacklistSchema = await mongoose.Schema({
    token:{
        type: String,
        required : [true, 'token is required to be added in blacklist']
    }
}, {timestamps: true})

const tokenBlacklistModel = mongoose.model('blacklistTokens', blacklistSchema);
export default tokenBlacklistModel;
