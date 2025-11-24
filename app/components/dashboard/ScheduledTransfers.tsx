"use client";

import { RightIcon } from "@/assets/Icons";
import { useScheduledTransfers } from "@/hooks/useFinanceActions";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { ScheduledTransfersSkeleton } from "./skeletons/ScheduledTransfersSkeleton";

export default function ScheduledTransfers() {
  const { data, isLoading } = useScheduledTransfers();
  const transferData = data?.data?.transfers;

  if (isLoading) {
    return <ScheduledTransfersSkeleton />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-[25px]">
        <h2 className="text-lg font-semibold">Scheduled Transfers</h2>
        <div className="text-sm text-[#29A073] flex items-center gap-3">
          <p>View All</p>
          <RightIcon />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {transferData?.map((data) => (
          <div key={data.id} className="flex justify-between h-[39px]">
            <div className="flex items-center gap-[15px]">
              <Image
                src={data.image}
                width={33}
                height={33}
                alt="avatar"
                unoptimized
                className="rounded-full w-[33px] h-[33px] object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{data.name}</p>
                <p className="text-secondary text-[12px]">
                  {formatDate(data.date)}
                </p>
              </div>
            </div>
            <div className="text-black text-[16px] font-semibold">
              {(() => {
                const amount = data.amount;
                const currency = data.currency;
                let formattedAmount;

                if (amount < 0) {
                  const absoluteAmount = Math.abs(amount);
                  formattedAmount = `- ${currency}${absoluteAmount}`;
                } else {
                  formattedAmount = `${currency}${amount}`;
                }

                return formattedAmount;
              })()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
