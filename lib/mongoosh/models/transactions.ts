import { model, Schema } from 'mongoose'
const transactionSchema = new Schema({
    at: { type: Date, default: Date.now() },
    category: { type: String, required: true, enum: ["expence", "income"] },
    title: { type: String, required: true, minlength: 2 },
    mode: { type: String, required: true, enum: ["cash", "online"] },
    amount: { type: Number, positive: true },
    by: {
        type: String,
        default: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        required: true
    }
})

const transactionModel = model("Transaction", transactionSchema, "transactions")

export default transactionModel;