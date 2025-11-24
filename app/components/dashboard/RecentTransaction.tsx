"use client";

import Image from "next/image";
import { useRecentTransaction } from "@/hooks/useFinanceActions";
import { RightIcon } from "@/assets/Icons";
import RecentTransactionSkeleton from "./skeletons/RecentTransaction";

export default function RecentTransaction() {
  const { data, isLoading } = useRecentTransaction();
  const transactions = data?.data?.transactions?.slice(0, 3) || [];

  return (
    <div className="border border-[#F5F5F5] rounded-[10px] w-full pt-[15px] pl-[25px] pr-[19px] pb-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
        <div className="text-sm text-[#29A073] flex items-center gap-3">
          <p>View All</p>
          <RightIcon />
        </div>
      </div>
      {!isLoading && transactions.length === 0 ? (
        <p className="text-center text-sm text-[#999999] py-10">
          No recent transactions found.
        </p>
      ) : null}
      <table className="w-full">
        <thead>
          <tr className="text-[12px] mb-1 text-third font-semibold text-left">
            <th>NAME/BUSINESS</th>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <RecentTransactionSkeleton key={index} />
              ))
            : transactions.map((transaction, index) => {
                const isLastRow = index === transactions.length - 1;

                const paddingBottomClass = isLastRow
                  ? "pt-4"
                  : "pb-[13px] pt-4";

                return (
                  <tr
                    key={transaction.id}
                    className={`items-center ${
                      !isLastRow ? "border-b border-[#F5F5F5]" : ""
                    }`}
                  >
                    <td className={`text-sm font-medium ${paddingBottomClass}`}>
                      <div className="flex gap-3.5">
                        <Image
                          width={40}
                          height={40}
                          src={transaction.image}
                          alt={transaction.name}
                        />
                        <div>
                          <p>{transaction.name}</p>{" "}
                          <p className="text-[12px] text-secondary">
                            {transaction.business}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      className={`text-sm text-secondary font-medium ${paddingBottomClass}`}
                    >
                      {transaction.type}
                    </td>
                    <td
                      className={`text-sm font-semibold ${paddingBottomClass}`}
                    >
                      {transaction.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: transaction.currency,
                      })}
                    </td>
                    <td
                      className={`text-sm text-secondary font-medium ${paddingBottomClass}`}
                    >
                      {(() => {
                        const dateObject = new Date(transaction.date);

                        const day = dateObject.toLocaleDateString("en-US", {
                          day: "2-digit",
                        });
                        const month = dateObject.toLocaleDateString("en-US", {
                          month: "short",
                        });
                        const year = dateObject.toLocaleDateString("en-US", {
                          year: "numeric",
                        });

                        return `${day} ${month} ${year}`;
                      })()}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
