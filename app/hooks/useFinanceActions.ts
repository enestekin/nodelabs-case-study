import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo, fetchFinancialSummary } from "@/api/finance";
import { UserResponseType } from "@/types/auth";
import { FinancialSummaryResponseType } from "@/types/finance";

export const userProfileInfo = () => {
  return useQuery<UserResponseType, Error>({
    queryKey: ["user-profile"],
    queryFn: fetchUserInfo,
    refetchOnWindowFocus: false,
  });
};

export const useFinancialSummary = () => {
  return useQuery<FinancialSummaryResponseType, Error>({
    queryKey: ["financial-summary"],
    queryFn: fetchFinancialSummary,
    refetchOnWindowFocus: false,
  });
};
