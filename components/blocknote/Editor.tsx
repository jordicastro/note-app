"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  DefaultReactSuggestionItem,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import {
  Block,
  BlockNoteEditor,
  PartialBlock,
  filterSuggestionItems,
} from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useTheme } from "next-themes";
import "./styles.css";
import { Code, Globe, Sigma } from "lucide-react";
import { insertCodeBlock, insertMathBlock } from "./customInserts";
import CustomToolbar from "./CustomToolbar";

interface EditorProps {
  initialContent?: string;
  id: string;
  onChange: (value: string) => void;
}

const Editor = ({ initialContent, id, onChange }: EditorProps) => {
  const { theme } = useTheme();
  const [blocks, setBlocks] = useState<Block[]>([]);

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

  const getCustomSlashMenuItems = (
    editor: BlockNoteEditor,
  ): DefaultReactSuggestionItem[] => [
    ...getDefaultReactSlashMenuItems(editor),
    insertCodeBlock(editor),
    insertMathBlock(editor),
  ];

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
        slashMenu={false}
        formattingToolbar={false}
      >
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query: string) =>
            filterSuggestionItems(getCustomSlashMenuItems(editor), query)
          }
        />
        <CustomToolbar />
      </BlockNoteView>
    </div>
  );
};

export default Editor;
