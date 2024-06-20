import { connectMongoDB } from "@/libs/mongodb";
import Note from '@/models/note';
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    const { id } = params;
    const { updatedContent: content } = await req.json();
    await connectMongoDB();
    await Note.findByIdAndUpdate(id, { content });
    return NextResponse.json({message: "Note updated"}, {status: 200})
}

export async function GET(req, {params}) {
    const { id } = params;
    await connectMongoDB();
    const note = await Note.findOne({_id: id});
    return NextResponse.json({note}, { status: 200 });
}