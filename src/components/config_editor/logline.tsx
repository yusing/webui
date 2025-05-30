import { Prose } from "@/components/ui/prose";
import Convert from "ansi-to-html";

const convertANSI = new Convert();
export const LogLine: React.FC<{ line: string }> = ({ line }) => {
  return (
    <Prose
      as="pre"
      textWrap={"wrap"}
      lineHeight="1.3rem"
      dangerouslySetInnerHTML={{
        __html: convertANSI.toHtml(line),
      }}
    />
  );
};
