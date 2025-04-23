import { AuthResponse } from "../types/authTypes";

const USER_KEY = 'authData';
const ROLE_KEY = 'roleData';
const CLIENT_VERSION_KEY = 'clientVersion';

export const storage = {
  setAuthData: (data: AuthResponse) => localStorage.setItem(USER_KEY, JSON.stringify(data)),
  getAuthData: (): AuthResponse | null => JSON.parse(localStorage.getItem(USER_KEY) || 'null'),
  clearAuthData: () => localStorage.removeItem(USER_KEY),
  
  setRoleData: (data: unknown) => localStorage.setItem(ROLE_KEY, JSON.stringify(data)),
  getClientVersion: () => localStorage.getItem(CLIENT_VERSION_KEY),
  clearAll: () => localStorage.clear()
};