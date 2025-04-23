export interface LoginCredentials {
  UserName: string;
  Password: string;
  TokenType: string;
}

export interface AuthResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  roleId: number;
  accessToken: string;
  tokensId: number;
  isAuthenticated: boolean;
}