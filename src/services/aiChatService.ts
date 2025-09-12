import { API } from "./api";

export const AiChatService = {
  authToken: async () => {
    const response = await API.get("/ai/auth");

    if (response.status === 200) return response.data;
  },

  sendMessageAPI: async (message: string) => {
    const response = await API.post("/ai/send", { message });

    if (response.status === 400) throw new Error("Erro de validação");

    if (response.status === 401) throw new Error("Não autorizado");

    return response.data;
  },

  fetchHistoryAPI: async () => {
    const response = await API.get("/ai/history");

    if (response.status === 401) throw new Error("Não autorizado");

    return response.data;
  },

  fetchLatestMessageAPI: async () => {
    const response = await API.get("/ai/latest");

    if (response.status === 401) throw new Error("Não autorizado");

    if (response.status === 404)
      throw new Error("Nenhuma mensagem nova encontrada");

    return response.data;
  },
};
