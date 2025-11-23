export type LoginRequestType = {
  email: string;
  password: string;
};

export type RegisterRequestType = {
  fullName: string;
  email: string;
  password: string;
};

export type UserType = {
  id: string;
  fullName: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLoginAt: string;
  lastLoginIP: string;
  createdAt: string;
  updatedAt: string;
};

export type LoginResponseType = {
  success: boolean;
  message: string;
  data: {
    user: UserType;
    accessToken: string;
  };
};

export type RegisterResponseType = {
  success: boolean;
  message: string;
  data: {
    id: string;
    fullName: string;
    email: string;
  };
};

export type ErrorResponseType = {
  success: boolean;
  error: string;
  message: string;
  code: string;
  details?: Array<{ message: string; field?: string; code: string }>;
};

export type UserResponseType = {
  success: boolean;
  data: UserType;
};
