import { NextResponse } from "next/server"
import connectDb from "@/lib/mongoosh/connection"
import User from '@/lib/mongoosh/models/user'

export const GET = async (request: Request) => {
    await connectDb()
    try {
        const userList = await User.find();
        return NextResponse.json(userList, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ message: "users not found" }, { status: 404 })
    }
}
export const POST = async (request: Request) => {
    await connectDb()
    try {
        const bodyContent = await request.json();
        const createdUser = await User.create(bodyContent)
        return NextResponse.json(createdUser, { status: 201, statusText: "user Created SuccessFully" })
    }
    catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 })
    }
}