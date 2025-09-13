import {
  ELogsWindowLogType,
  EUserChatsRole,
  EUsersLogsStatus,
} from "../enum/Admin.enum";

export interface IAdminLoginParams {
  username: string;
  password: string;
}

interface ISessionsStatus {
  sessions_active: number;
  sessions_limit: number;
}
export interface IHealth {
  openai_api?: string;
  database?: string;
  env_vars?: string;
  sessions_status?: ISessionsStatus;
  status?: string;
}

export interface ILogsWindow {
  id: number;
  message: string;
  timestamp: string;
  log_type: ELogsWindowLogType;
  priority: number;
}

export interface IUsersLogs {
  id: number;
  name?: string;
  status: EUsersLogsStatus;
  assistant_index: number;
  created_at: string;
}

export interface IUserChats {
  id: number;
  timestamp: string;
  conteudo?: string;
  role?: EUserChatsRole;
  processado: boolean;
  session_id: number;
}
