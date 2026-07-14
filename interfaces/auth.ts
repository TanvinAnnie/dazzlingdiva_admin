export interface LoginRequest {
  email: string;
  password: string;
}

export interface JwtPayload {
  id: string;
  email: string;
  role: "admin" | "customer";
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
}