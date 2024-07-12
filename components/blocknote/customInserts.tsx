import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { Code, Sigma } from "lucide-react";

export const insertCodeBlock = (editor: BlockNoteEditor) => ({
  title: "Code Block",
  onItemClick: () => {
    // Block that the text cursor is currently in.
    const currentBlock = editor.getTextCursorPosition().block;
    // New block we want to insert.
    const codeBlock: PartialBlock = {
      type: "paragraph",
      content: [{ type: "text", text: "code block", styles: { bold: true } }],
    };
    // Inserting the new block after the current one.
    editor.insertBlocks([codeBlock], currentBlock, "after");
  },
  aliases: ["code", "code-block"],
  group: "Other",
  icon: <Code size={18} />,
  subtext: "Used to insert a code block",
});

export const insertMathBlock = (editor: BlockNoteEditor) => ({
  title: "Math Block",
  onItemClick: () => {
    // Block that the text cursor is currently in.
    const currentBlock = editor.getTextCursorPosition().block;
    // New block we want to insert.
    const codeBlock: PartialBlock = {
      type: "paragraph",
      content: [{ type: "text", text: "math block", styles: { bold: true } }],
    };
    // Inserting the new block after the current one.
    editor.insertBlocks([codeBlock], currentBlock, "after");
  },
  aliases: ["math", "math-block"],
  group: "Other",
  icon: <Sigma size={18} />,
  subtext: "Used to insert a math block",
});
