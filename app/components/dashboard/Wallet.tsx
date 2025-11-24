"use client";

import {
  BankIcon,
  DotsIcon,
  WifiIcon,
  MasterIcon,
  VisaIcon,
} from "@/assets/Icons";

interface WalletCard {
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

import { useWallet } from "@/hooks/useFinanceActions";
import WalletSkeleton from "./skeletons/WalletSkeleton";

export default function Wallet() {
  const { data, isLoading } = useWallet();
  const cards: WalletCard[] = data?.data.cards || [];

  if (isLoading) {
    return <WalletSkeleton />;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-[15px]">
        <h4 className="text-lg font-semibold">Wallet</h4>
        <DotsIcon />
      </div>

      <div>
        <div className="bg-[linear-gradient(to_right,#4A4A49,#20201F)] pt-[18px] pl-[30px] pr-[38px] rounded-xl min-w-[354px] pb-7">
          <div className="mb-[27px]">
            <p className="text-[#FFFFFF] text-[16px]">
              Maglo. |{" "}
              <span className="text-[12px] text-[#626260]">Universal Bank</span>
            </p>
          </div>
          <div className="flex justify-between items-center mb-[21px]">
            <BankIcon />
            <WifiIcon />
          </div>
          <div className="text-[#ffffff] text-[17px] font-bold tracking-widest mb-2">
            {cards[0]?.cardNumber}
          </div>
          <div className="flex justify-end">
            <MasterIcon />
          </div>
        </div>

        <div className="px-[15px] -mt-18">
          <div className="bg-white/30 border border-white/30 backdrop-blur-sm min-[172px] py-[18px] pl-5 pr-3.5 rounded-xl">
            <div className="mb-[13px]">
              <p className="text-[#FFFFFF] text-[16px]">
                Maglo. |{" "}
                <span className="text-[12px] text-[#F5F5F5]">
                  Universal Bank
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center mb-10">
              <BankIcon className="w-[30px] h-6" />
              <WifiIcon className="w-[27] h-5" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold mb-[5px]">{cards[1]?.cardNumber}</p>
                <p className="text-secondary text-[12px]">
                  {cards[1].expiryMonth}/{cards[1].expiryYear}
                </p>
              </div>

              <VisaIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
