import { tv } from "tailwind-variants";
import ReactMarkdown from "react-markdown";

const ChatBubbleStyles = tv({
  slots: {
    containerMain: "flex mb-2 lg:mb-4",
    containerBubble:
      "max-w-[80%] md:max-w-[60%] xl:max-w-[40%] p-4 lg:p-8 rounded-lg text-xs lg:text-sm font-regular text-foreground",
  },

  variants: {
    isSent: {
      true: {
        containerMain: "justify-end",
        containerBubble: "bg-card rounded-br-none",
      },
      false: {
        containerMain: "justify-start",
      },
    },
  },
});

const { containerMain, containerBubble } = ChatBubbleStyles();

type ChatBubbleProps = {
  type: "sent" | "received";
  text: string;
};

const ChatBubble = ({ type, text }: ChatBubbleProps) => {
  const isSent = type === "sent";

  return (
    <div className={containerMain({ isSent })}>
      <div className={containerBubble({ isSent })}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatBubble;
