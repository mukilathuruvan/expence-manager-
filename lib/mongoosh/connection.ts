import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const url = process.env.mongodb_url ?? ""
        await mongoose.connect(url);
        console.log("db connected successFully")
    }
    catch (error: any) {
        console.log(`error happens`, error.message)
    }
}


export default connectDb;