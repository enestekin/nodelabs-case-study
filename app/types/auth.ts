export interface LoginRequestType {
  email: string;
  password: string;
}

export interface RegisterRequestType {
  fullName: string;
  email: string;
  password: string;
}

export interface UserType {
  id: string;
  fullName: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLoginAt: string;
  lastLoginIP: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponseType {
  success: boolean;
  message: string;
  data: {
    user: UserType;
    accessToken: string;
  };
}

export interface RegisterResponseType {
  success: boolean;
  message: string;
  data: {
    id: string;
    fullName: string;
    email: string;
  };
}

export interface ErrorResponseType {
  success: boolean;
  error: string;
  message: string;
  code: string;
  details?: Array<{ message: string; field?: string; code: string }>;
}
