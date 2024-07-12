import {
  BasicTextStyleButton,
  BlockTypeSelect,
  ColorStyleButton,
  CreateLinkButton,
  FileCaptionButton,
  FileReplaceButton,
  FormattingToolbar,
  FormattingToolbarController,
  NestBlockButton,
  TextAlignButton,
  UnnestBlockButton,
} from "@blocknote/react";
import { CodeBlockButton } from "./CodeBlockButton";

const CustomToolbar = () => {
  return (
    <FormattingToolbarController
      formattingToolbar={() => (
        <FormattingToolbar>
          <BlockTypeSelect key={"blockTypeSelect"} />

          {/* Extra button to toggle blue text & background */}
          {/* <BlueButton key={"customButton"} /> */}
          <CodeBlockButton key={"codeBlockButton"} />

          <FileCaptionButton key={"fileCaptionButton"} />
          <FileReplaceButton key={"replaceFileButton"} />

          <BasicTextStyleButton
            basicTextStyle={"bold"}
            key={"boldStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"italic"}
            key={"italicStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"underline"}
            key={"underlineStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"strike"}
            key={"strikeStyleButton"}
          />
          {/* Extra button to toggle code styles */}
          <BasicTextStyleButton
            key={"codeStyleButton"}
            basicTextStyle={"code"}
          />

          {/* <TextAlignButton
              textAlignment={"left"}
              key={"textAlignLeftButton"}
            />
            <TextAlignButton
              textAlignment={"center"}
              key={"textAlignCenterButton"}
            />
            <TextAlignButton
              textAlignment={"right"}
              key={"textAlignRightButton"}
            /> */}

          <ColorStyleButton key={"colorStyleButton"} />
          <CreateLinkButton key={"createLinkButton"} />
        </FormattingToolbar>
      )}
    />
  );
};

export default CustomToolbar;
