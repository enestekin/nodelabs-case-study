import { useQuery } from "@tanstack/react-query";
import {
  fetchUserInfo,
  fetchFinancialSummary,
  fetchWorkingCapital,
} from "@/api/finance";
import { UserResponseType } from "@/types/auth";
import {
  FinancialSummaryResponseType,
  WorkingCapitalResponseType,
} from "@/types/finance";

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

export const useWWorkingCapital = () => {
  return useQuery<WorkingCapitalResponseType, Error>({
    queryKey: ["working-capital"],
    queryFn: fetchWorkingCapital,
    refetchOnWindowFocus: false,
  });
};
