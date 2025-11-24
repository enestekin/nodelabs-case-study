import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi, logoutApi } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";
import {
  LoginRequestType,
  RegisterRequestType,
  LoginResponseType,
  RegisterResponseType,
  ErrorResponseType,
} from "@/types/auth";

export const useAuthActions = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();

  const loginMutation = useMutation<
    LoginResponseType,
    ErrorResponseType,
    LoginRequestType
  >({
    mutationFn: (data: LoginRequestType) => loginApi(data),
    onSuccess: (res) => {
      const { accessToken, user } = res.data;

      Cookies.set("token", accessToken, { expires: 7, path: "/" });

      setAuth(accessToken, user);
      router.push("/dashboard");
    },
  });

  const registerMutation = useMutation<
    RegisterResponseType,
    ErrorResponseType,
    RegisterRequestType
  >({
    mutationFn: (data: RegisterRequestType) => registerApi(data),
    onSuccess: async (_, variables) => {
      const loginRes = await loginApi({
        email: variables.email,
        password: variables.password,
      });

      setAuth(loginRes.data.accessToken, loginRes.data.user);
      router.push("/dashboard");
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      Cookies.remove("token");
      logout();
      router.push("/signin");
    },
  });

  return { loginMutation, registerMutation, logoutMutation };
};
