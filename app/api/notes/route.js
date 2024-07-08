import { connectMongoDB } from "@/libs/mongodb";
import Note from '@/models/note';
import { NextResponse } from 'next/server';


export async function POST(req) {
    const { title, icon, content } = await req.json();
    await connectMongoDB();
    const newNote = await Note.create({ title, icon, content });
    const _id = newNote._id.toString();
    return NextResponse.json({
            message: "Note created",
            note: { _id: `${_id}` }
        },
        {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const notes = await Note.find();
    return NextResponse.json({notes});
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({message: "Note deleted"}, {status: 200});
}