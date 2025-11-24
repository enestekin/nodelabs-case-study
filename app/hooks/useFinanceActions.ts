import { useQuery } from "@tanstack/react-query";
import {
  fetchUserInfo,
  fetchFinancialSummary,
  fetchWorkingCapital,
  fetchRecentTransactions,
  fetchWallet,
  fetchScheduledTransfers,
} from "@/api/finance";
import { UserResponseType } from "@/types/auth";
import {
  FinancialSummaryResponseType,
  WorkingCapitalResponseType,
  TransactionResponseType,
  WalletResponseType,
  TransferResponseType,
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

export const useRecentTransaction = () => {
  return useQuery<TransactionResponseType, Error>({
    queryKey: ["recent-transactions"],
    queryFn: fetchRecentTransactions,
    refetchOnWindowFocus: false,
  });
};

export const useWallet = () => {
  return useQuery<WalletResponseType, Error>({
    queryKey: ["wallet"],
    queryFn: fetchWallet,
    refetchOnWindowFocus: false,
  });
};

export const useScheduledTransfers = () => {
  return useQuery<TransferResponseType, Error>({
    queryKey: ["scheduled-transfers"],
    queryFn: fetchScheduledTransfers,
    refetchOnWindowFocus: false,
  });
};
