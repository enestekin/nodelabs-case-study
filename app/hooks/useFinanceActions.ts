import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "@/api/finance";
import { UserResponseType } from "@/types/auth";

export const userProfileInfo = () => {
  return useQuery<UserResponseType, Error>({
    queryKey: ["user-profile"],
    queryFn: fetchUserInfo,
    refetchOnWindowFocus: false,
  });
};
