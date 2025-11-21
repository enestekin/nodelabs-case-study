import api from "./axiosInstance";
import {
  RegisterResponseType,
  LoginResponseType,
  LoginRequestType,
  RegisterRequestType,
} from "../types/auth";

export const loginApi = async (
  data: LoginRequestType
): Promise<LoginResponseType> => {
  const res = await api.post<LoginResponseType>("/users/login", data);
  return res.data;
};

export const registerApi = async (
  data: RegisterRequestType
): Promise<RegisterResponseType> => {
  const res = await api.post<RegisterResponseType>("/users/register", data);
  return res.data;
};
