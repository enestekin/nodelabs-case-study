"use client";

import Card from "../UI/Card";
import { CardSkeleton } from "@/components/dashboard/skeletons/CardSkeleton";
import {
  TotalBalanceIcon,
  TotalSpendingIcon,
  TotalSavedIcon,
} from "@/assets/Icons";
import { useFinancialSummary } from "@/hooks/useFinanceActions";
import { convertToUSD } from "@/utils/currency";

export default function Summary() {
  const { data, isLoading } = useFinancialSummary();
  const summary = data?.data;

  const cards = [
    {
      title: "Total balance",
      amount: convertToUSD(summary?.totalBalance?.amount || 0),

      icon: <TotalBalanceIcon />,
      variant: "dark",
    },
    {
      title: "Total spending",
      amount: convertToUSD(summary?.totalExpense?.amount || 0),
      icon: <TotalSpendingIcon />,
      variant: "light",
    },
    {
      title: "Total saved",
      amount: convertToUSD(summary?.totalSavings?.amount || 0),
      icon: <TotalSavedIcon />,
      variant: "light",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex gap-[25px]">
        <CardSkeleton variant="dark" />
        <CardSkeleton variant="light" />
        <CardSkeleton variant="light" />
      </div>
    );
  }

  return (
    <div className="flex gap-[25px]">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          amount={card.amount}
          icon={card.icon}
          variant={card.variant as "dark" | "light"}
        />
      ))}
    </div>
  );
}
