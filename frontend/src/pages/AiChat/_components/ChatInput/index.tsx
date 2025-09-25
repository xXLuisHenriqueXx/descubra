import { tv } from "tailwind-variants";
import { SendHorizonal } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const ChatInputStyles = tv({
  slots: {
    containerMain: "fixed left-0 right-0 bottom-0 bg-background",
    containerContent: "flex flex-row items-center gap-x-2 lg:gap-x-4 w-full",
    containerQuick:
      "absolute -top-12 left-4 right-4 flex flex-row flex-nowrap gap-x-2 lg:gap-x-4 w-full overflow-x-auto",
    input: "py-5 text-sm lg:text-base font-regular text-foreground",
  },
});

const { containerMain, containerContent, containerQuick, input } =
  ChatInputStyles();

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
};

const ChatInput = ({
  value,
  onChange,
  onSend,
  disabled = false,
}: ChatInputProps) => {
  const quickSend = (input: string) => {
    onChange(input);

    onSend();
  };

  const quickResponses = [
    {
      id: 1,
      text: "Qual o curso mais diferente do CT?",
      action: () => quickSend("Qual o curso mais diferente do CT?"),
      disabled: false,
    },
    {
      id: 2,
      text: "Diferenças entre os demais cursos",
      action: () => quickSend("Diferenças entre os demais cursos"),
      disabled: false,
    },
    {
      id: 3,
      text: "Qual o perfil do aluno",
      action: () => quickSend("Qual o perfil do aluno"),
      disabled: false,
    },
    {
      id: 4,
      text: "Preciso ser bom em matemática para a área da tecnologia?",
      action: () =>
        quickSend("Preciso ser bom em matemática para a área da tecnologia?"),
      disabled: false,
    },
    {
      id: 5,
      text: "Qual a engenharia mais legal?",
      action: () => quickSend("Qual a engenharia mais legal?"),
      disabled: false,
    },
    {
      id: 6,
      text: "Posso ter carreira internacional estudando no CT?",
      action: () =>
        quickSend("Posso ter carreira internacional estudando no CT?"),
      disabled: false,
    },
  ];

  return (
    <Card className={containerMain()}>
      <CardContent className={containerContent()}>
        <div
          className={containerQuick()}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {quickResponses.map((item) => (
            <Button
              variant={"outline"}
              key={item.id}
              onClick={() => item.action()}
              disabled={item.disabled}
            >
              {item.text}
            </Button>
          ))}
        </div>

        <Input
          className={input()}
          type="text"
          placeholder="Escreva sua pergunta ..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
        <Button
          variant={"secondary"}
          className="size-10"
          onClick={onSend}
          disabled={disabled}
        >
          <SendHorizonal />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChatInput;
