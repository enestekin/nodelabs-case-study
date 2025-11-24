import api from "./axiosInstance";
import {
  FinancialSummaryResponseType,
  WorkingCapitalResponseType,
  WalletResponseType,
  TransactionResponseType,
  TransferResponseType,
} from "@/types/finance";
import { UserResponseType } from "@/types/auth";

export const fetchFinancialSummary =
  async (): Promise<FinancialSummaryResponseType> => {
    const res = await api.get<FinancialSummaryResponseType>(
      "/financial/summary"
    );
    return res.data;
  };

export const fetchWorkingCapital =
  async (): Promise<WorkingCapitalResponseType> => {
    const res = await api.get<WorkingCapitalResponseType>(
      "/financial/working-capital"
    );
    return res.data;
  };

export const fetchWallet = async (): Promise<WalletResponseType> => {
  const res = await api.get<WalletResponseType>("/financial/wallet");
  return res.data;
};

export const fetchRecentTransactions =
  async (): Promise<TransactionResponseType> => {
    const res = await api.get<TransactionResponseType>(
      "/financial/transactions/recent"
    );
    return res.data;
  };

export const fetchScheduledTransfers =
  async (): Promise<TransferResponseType> => {
    const res = await api.get<TransferResponseType>(
      "/financial/transfers/scheduled"
    );
    return res.data;
  };

export const fetchUserInfo = async (): Promise<UserResponseType> => {
  const res = await api.get<UserResponseType>("/users/profile");
  return res.data;
};
