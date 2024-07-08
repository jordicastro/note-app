import { connectMongoDB } from "@/libs/mongodb";
import Note from '@/models/note';
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    const { id } = params;
    const data = await req.json();
    if ('content' in data) {
        const { content } = data;
        await connectMongoDB();
        await Note.findByIdAndUpdate(id, { content });
        return NextResponse.json({message: "Note (content) updated"}, {status: 200})
    }
    if ('title' in data) {
        const { title } = data;
        await connectMongoDB();
        await Note.findByIdAndUpdate(id, { title});
        return NextResponse.json({message: "Note (title) updated"}, {status: 200})
    }
    return NextResponse.json({message: "Invalid request"}, {status: 400})
}

export async function GET(req, {params}) {
    const { id } = params;
    await connectMongoDB();
    const note = await Note.findOne({_id: id});
    return NextResponse.json({note}, { status: 200 });
}