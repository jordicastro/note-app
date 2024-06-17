import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
    {
        title: String,
        icon: String,
        content: String,
    }, 
    {
        timestamps: true,
    }
)

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;