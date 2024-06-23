"use client";
import React, { useState, useEffect, useRef } from 'react';
// lodash for debounce

interface TextEditorProps {
    initialContent: string,
    id: string
}

const TextEditor: React.FC<TextEditorProps> = ({initialContent, id}) => {
    const [content, setContent] = useState<string>(initialContent);

    useEffect( () => {
        const updateContent = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({"updatedContent": content})
                });
                if (!res.ok) {
                    throw new Error("Failed to update note")
                } 
            } catch (error) {
                console.error("Error updating note ", error)
            }
        }
        updateContent();
    
    }, [content, id] )

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setContent(e.target.value)
    }

    console.log(content)
  return (
    <div className="border border-slate-500 mt-6">
        <textarea className="w-full h-64 p-2 border border-slate-300"

        value={content}
        onChange={handleChange}
        />
    </div>
  )
}

export default TextEditor