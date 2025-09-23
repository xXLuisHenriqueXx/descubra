import { API } from "./api";
import type { IAdminLoginParams } from "../common/interface/Admin.interface";

export const AdminService = {
  login: async (params: IAdminLoginParams) => {
    const response = await API.post("/admin/login", params);

    if (response.status === 401) throw new Error("Credenciais inválidas");

    return response;
  },

  health: async () => {
    const response = await API.get("/admin/health");

    return response.data;
  },

  logsWindow: async () => {
    const response = await API.get("/admin/logs_window?inicio=0&offset=80");

    if (response.status === 400) throw new Error("Parâmetros inválidos.");

    return response.data;
  },

  userLogs: async () => {
    const response = await API.get("/admin/users_logs");

    return response.data;
  },

  userChats: async (id: number) => {
    const response = await API.get(`/admin/user_chats?user_id=${id}`);

    if (response.status === 401)
      throw new Error("Parâmetro user_id é necessário.");

    if (response.status === 404) throw new Error("Usuário não encontrado.");

    return response.data;
  },

  activeSession: async (id: number) => {
    const response = await API.post("/admin/session/activate", { user_id: id });

    return response.data;
  },

  deactiveSession: async (id: number) => {
    const response = await API.post("/admin/session/deactivate", {
      user_id: id,
    });

    return response.data;
  },

  checkStatusChat: async () => {
    const response = await API.get("/admin/chat/status");

    return response.data.ai_chat_active;
  },

  deactiveChat: async () => {
    const response = await API.post("/admin/chat/deactivate");

    return response.data;
  },

  activeChat: async () => {
    const response = await API.post("/admin/chat/activate");

    return response.data;
  },
};
