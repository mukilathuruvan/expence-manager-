import { model, Schema } from 'mongoose'

// let validatePassword = (password: string) => password.length     validate: [validatePassword, "Please fill a valid email address"]


export const userSchema = new Schema({
    name: { type: String, minlength: 3, set: (name: string) => name[0].toUpperCase() + name.slice(1) },
    username: { type: String, minlength: 3, unique: true },
    password: { type: String, minlength: 3, unique: true, },
    email: { type: String, trim: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] }
})

const userModel = model("User", userSchema)

export default userModel