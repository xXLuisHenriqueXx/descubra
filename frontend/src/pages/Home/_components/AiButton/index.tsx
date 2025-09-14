import { Bot } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router";

const AiButton = () => {
  return (
    <Link to="/ai">
      <Button
        variant={"outline"}
        size="icon"
        className="size-12 fixed bottom-4 right-4"
      >
        <span className="absolute inset-0 rounded-[inherit] bg-foreground/15 animate-pulse-shape" />
        <span className="absolute inset-0 rounded-[inherit] bg-foreground/15 animate-pulse-shape [animation-delay:700ms]" />
        <Bot />
      </Button>
    </Link>
  );
};

export default AiButton;
