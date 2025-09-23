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

interface IUsedTokens {
  ai_model: string;
  estimated_price_usd: number;
  total_input_tokens: number;
  total_output_tokens: number;
}

export interface IHealth {
  openai_api?: string;
  database?: string;
  env_vars?: string;
  sessions_status?: ISessionsStatus;
  used_tokens?: IUsedTokens;
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
  active: boolean;
  total_messages: number;
  total_tokens: number;
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
