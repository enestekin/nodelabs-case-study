export type FinancialSummaryResponseType = {
  success: boolean;
  message: string;
  data: {
    totalBalance: {
      amount: number;
      currency: string;
      change: {
        percentage: number;
        trend: "up" | "down" | "stable";
      };
    };
    totalExpense: {
      amount: number;
      currency: string;
      change: {
        percentage: number;
        trend: "up" | "down" | "stable";
      };
    };
    totalSavings: {
      amount: number;
      currency: string;
      change: {
        percentage: number;
        trend: "up" | "down" | "stable";
      };
    };
    lastUpdated: string;
  };
};

export type WorkingCapitalResponseType = {
  success: boolean;
  message: string;
  data: {
    period: string;
    currency: string;
    data: [
      {
        month: string;
        income: number;
        expense: number;
        net: number;
      }
    ];
    summary: {
      totalIncome: number;
      totalExpense: number;
      netBalance: number;
    };
  };
};

export type WalletResponseType = {
  success: boolean;
  message: string;
  data: {
    cards: [
      {
        id: string;
        name: string;
        type: "credit" | "debit";
        cardNumber: string;
        bank: string;
        network: "Visa" | "MasterCard" | "American Express";
        expiryMonth: number;
        expiryYear: number;
        color: string;
        isDefault: boolean;
      }
    ];
  };
};

export type TransactionResponseType = {
  success: boolean;
  message: string;
  data: {
    transactions: [
      {
        id: string;
        name: string;
        business: string;
        image: string;
        type: string;
        amount: number;
        currency: string;
        date: string;
        status: "completed" | "pending" | "failed";
      }
    ];
    summary: {
      totalIncome: number;
      totalExpense: number;
      count: number;
    };
  };
};

export type TransferResponseType = {
  success: boolean;
  message: string;
  data: {
    transfers: [
      {
        id: string;
        name: string;
        image: string;
        date: string;
        amount: number;
        currency: string;
        status: "scheduled" | "completed" | "processing" | "cancelled";
      }
    ];
    summary: {
      totalScheduledAmount: number;
      count: number;
    };
  };
};
