import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "https://case.nodelabs.dev/api/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const responseData = error.response?.data;
    let errorMessage = "Something went wrong.";

    if (responseData?.details && responseData.details.length > 0) {
      errorMessage = responseData.details[0].message;
    } else if (responseData?.message) {
      errorMessage = responseData.message;
    }

    toast.error(errorMessage);

    return Promise.reject(error);
  }
);

export default api;
