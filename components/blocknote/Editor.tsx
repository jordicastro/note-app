"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { Block, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useTheme } from "next-themes";
import "./styles.css";

interface EditorProps {
    initialContent?: string;
    id: string;
    onChange: (value: string) => void;
}

const Editor = ({initialContent, id, onChange}: EditorProps) => {
  const { theme } = useTheme();
  const [blocks, setBlocks] = useState<Block[]>([]);

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });


  return (
    <div className="mt-6">
      <BlockNoteView 
        editor={editor}
        theme={theme === "dark" ? "dark" : "light"}
        onChange={() => {
          setBlocks(editor.document);
          onChange(JSON.stringify(blocks, null, 2));
        }}
        data-theming-css-demo
      />
    </div>
  )
}

export default Editor