import { useCallback, useEffect, useRef, useState } from "react";
import { tv } from "tailwind-variants";

import { AiChatService } from "../../services/aiChatService";
import ChatInput from "./_components/ChatInput";
import Container from "./_components/Container";
import ChatBubble from "./_components/ChatBubble";
import BackButton from "./_components/BackButton";

const AiChatStyles = tv({
  slots: {
    containerMain: "flex flex-col flex-1 gap-4 mb-20 overflow-y-auto",
  },
});

const { containerMain } = AiChatStyles();

type SessionStatus = "idle" | "processing" | "ready";
type MessageType = "sent" | "received";

type Message = {
  id: number | string;
  text: string;
  type: MessageType;
  placeholder?: boolean;
};

const AiChat = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>("idle");

  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll para útlima mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Inicialização do chat
  useEffect(() => {
    let isMounted = true;

    const initChat = async () => {
      try {
        var authResponse = await AiChatService.authToken();
        authResponse = await AiChatService.authToken();
        const status: SessionStatus =
          authResponse.session_data.status || "idle";

        if (!isMounted) return;

        const welcome: Message = {
          id: "welcome",
          text: "**Olá!** Me chamo Eduardo e sou seu assistente virtual! Estou aqui para responder suas dúvidas a respeito dos cursos do **Centro de Tecnologia**! Lembre-se: *sou um assistente virtual e posso cometer erros*. Sempre verifique as informações que eu fornecer com um professor!.",
          type: "received",
        };

        const historyResponse = await AiChatService.fetchHistoryAPI();
        const history: Message[] =
          historyResponse.history?.map((msg: any) => ({
            id: msg.timestamp,
            text: msg.conteudo,
            type: msg.role === "assistant" ? "received" : "sent",
          })) || [];

        let initialMessages = [welcome, ...history];
        if (
          status === "processing" &&
          !initialMessages.some((msg) => msg.placeholder)
        ) {
          initialMessages.push({
            id: "placeholder",
            text: "...",
            type: "received",
            placeholder: true,
          });
          startPolling();
        }
        setMessages(initialMessages);
      } catch (error) {
        console.log(error);
        setMessages([
          {
            id: "error",
            text: "Erro ao inicializar o chat. Tente novamente mais tarde.",
            type: "received",
          },
        ]);
      }
    };

    initChat();

    return () => {
      isMounted = false;
      stopPolling();
    };
  }, []);

  // Polling para resposta do bot
  const startPolling = useCallback(() => {
    if (pollingRef.current) return;

    pollingRef.current = setInterval(async () => {
      try {
        const latestReponse = await AiChatService.fetchLatestMessageAPI();

        if (latestReponse && latestReponse.role && latestReponse.conteudo) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.placeholder
                ? {
                    id: Date.now(),
                    text: latestReponse.conteudo,
                    type: "received",
                  }
                : msg
            )
          );

          setSessionStatus("idle");
          stopPolling();
        }
      } catch (error) {
        console.error("Erro ao buscar última mensagem:", error);
      }
    }, 3000);
  }, []);

  const stopPolling = useCallback(() => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  }, []);

  // Envio de mensagem do usuário
  const sendUserMessage = async () => {
    if (sessionStatus !== "idle" || !input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      type: "sent",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      await AiChatService.sendMessageAPI(userMessage.text);
      setMessages((prev) => [
        ...prev,
        { id: "placeholder", text: "...", type: "received", placeholder: true },
      ]);
      setSessionStatus("processing");
      startPolling();
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: "error",
          text: "Erro ao enviar mensagem. Tente novamente.",
          type: "received",
        },
      ]);
    }
  };

  return (
    <Container>
      <BackButton />

      <article className={containerMain()}>
        {messages.map((msg) => (
          <ChatBubble key={msg.id} type={msg.type} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
      </article>

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={sendUserMessage}
        disabled={sessionStatus !== "idle"}
      />
    </Container>
  );
};

export default AiChat;
