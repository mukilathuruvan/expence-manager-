import { NextResponse } from "next/server";
import Transaction from "@/lib/mongoosh/models/transactions";
import connectDb from "@/lib/mongoosh/connection";
export const GET = async () => {
    await connectDb()
    try {
        const transactionsList = await Transaction.find()
        return NextResponse.json(transactionsList, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 404 })
    }
}

export const POST = async (request: Request) => {
    await connectDb()
    try {
        const bodyContent = await request.json();
        const createdTransaction = await Transaction.create(bodyContent);
        return NextResponse.json(createdTransaction, { status: 201 });
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}